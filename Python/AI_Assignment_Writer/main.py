# Run pip install -r requirements.txt
import os
import llama3
import markdown2
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError


SCOPES = ['https://www.googleapis.com/auth/drive',
          'https://www.googleapis.com/auth/documents']

llama3.initLama()


creds = None

# Reading and storing the content from latest modified .md
md_files = [file for file in os.listdir(".") if file.endswith(".md")]
latest_file = sorted(md_files, key=lambda x: os.path.getmtime(x))[-1]
with open(latest_file, 'r', encoding='utf-8') as file:
    msg = file.read()

html_content = markdown2.markdown(msg)
f = open("mdToHTML.html", 'w')
f.write(html_content)
f.close()


def token():
    import os.path
    global creds

    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        with open('token.json', 'w') as token:
            token.write(creds.to_json())


def folder_exists(name):
    drive_service = build('drive', 'v3', credentials=creds)
    query = f"name = '{
        name}' and mimeType = 'application/vnd.google-apps.folder'"
    try:
        response = drive_service.files().list(q=query, spaces='drive',
                                              fields='files(id, name)').execute()
        files = response.get('files', [])
        if not files:
            # Folder does not exist
            return None
        else:
            # Folder exists
            return files[0]['id']
    except HttpError as error:
        print(f"An error occurred: {error}")
        return None


def create_folder(name):
    folder_id = folder_exists(name)
    if folder_id is None:
        drive_service = build('drive', 'v3', credentials=creds)
        file_metadata = {
            'name': name,
            'mimeType': 'application/vnd.google-apps.folder'
        }
        file = drive_service.files().create(body=file_metadata, fields='id').execute()
        print('Folder ID: %s' % file.get('id'))
        return file.get('id')
    else:
        print(f"Folder '{name}' already exists")
        return folder_id


def doc_id(title, folder_id):
    drive_service = build('drive', 'v3', credentials=creds)
    doc_title = title
    doc_metadata = {
        'name': doc_title,
        'parents': [folder_id],
        'mimeType': 'application/vnd.google-apps.document'
    }
    drive_service = build('drive', 'v3', credentials=creds)
    doc = drive_service.files().create(body=doc_metadata).execute()
    id = doc['id']
    return id


def doc_content(id, gdocs_content):
    docs_service = build('docs', 'v1', credentials=creds)
    docs_service.documents().batchUpdate(documentId=id, body={
        'requests': gdocs_content}).execute()


def main(gdocs_content):
    token()
    folder_id = create_folder("NeuralPen Assignments")
    myId = doc_id(latest_file[:-3], folder_id)
    doc_content(myId, gdocs_content)
    print("\n\nClick on the below link to edit your assignment")
    print(f"https://docs.google.com/document/d/{myId}/edit")


def html_to_google_docs_requests(html_content):
    from bs4 import BeautifulSoup

    soup = BeautifulSoup(html_content, 'html.parser')
    requests = []
    current_index = 1  # Start at index 1

    all_strong = soup.find_all('strong')
    for tag in all_strong:
        tag.name = 'b'
    all_em = soup.find_all('em')
    for tag in all_em:
        tag.replace_with(f"{tag.text}")
    all_pre = soup.find_all('pre')
    for tag in all_pre:
        tag.name = 'p'
    all_code = soup.find_all('code')
    for tag in all_code:
        tag.name = 'p'
    for element in soup:
        if element.name == 'p':
            for child in element.children:
                if (child.name == 'b'):
                    requests.append(
                        {'insertText': {'location': {'index': current_index}, 'text': child.text}})
                    requests.append({
                        'updateTextStyle': {
                            'range': {'startIndex': current_index, 'endIndex': current_index + len(child.text)},
                            'textStyle': {
                                'bold': True,
                                'weightedFontFamily': {
                                    'fontFamily': 'Arial',
                                    'weight': 800
                                },
                                'fontSize': {'magnitude': 12, 'unit': 'PT'}
                            },
                            'fields': 'bold,weightedFontFamily,fontSize'
                        }
                    })
                    current_index += len(child.text)  # Update index
                elif element.name == 'i':
                    requests.append(
                        {'insertText': {'location': {'index': current_index}, 'text': element.text}})
                    requests.append({
                        'updateTextStyle': {
                            'range': {'startIndex': current_index, 'endIndex': current_index + len(element.text)},
                            'textStyle': {
                                'italic': True,
                                'weightedFontFamily': {
                                    'fontFamily': 'Arial',
                                    'weight': 400
                                },
                                'fontSize': {'magnitude': 12, 'unit': 'PT'}
                            },
                            'fields': 'italic,weightedFontFamily,fontSize'
                        }
                    })
                    current_index += len(element.text)  # Update index
                elif element.name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
                    heading_level = element.name.upper()
                    named_style_type = f'HEADING_{int(heading_level[1])}'
                    requests.append({'insertText': {'location': {
                                    'index': current_index}, 'text': element.text + '\n'}})
                    requests.append({
                        'updateParagraphStyle': {
                            'range': {'startIndex': current_index, 'endIndex': current_index + len(element.text)},
                            'paragraphStyle': {'namedStyleType': named_style_type},
                            'fields': 'namedStyleType'
                        }
                    })
                    requests.append({
                        'updateTextStyle': {
                            'range': {'startIndex': current_index, 'endIndex': current_index + len(element.text)},
                            'textStyle': {
                                'weightedFontFamily': {
                                    'fontFamily': 'Arial',
                                    'weight': 700
                                },
                                # Specify font size for headings
                                'fontSize': {'magnitude': 14, 'unit': 'PT'}
                            },
                            'fields': 'weightedFontFamily,fontSize'
                        }
                    })
                    current_index += len(element.text) + 1  # Update index
                elif element.name == 'a':
                        text = element.get_text()
                        href = element.get('href')
                        requests.append({
                            'insertText': {
                                'location': {
                                    'index': current_index
                                },
                                'text': f"{text} "
                            }
                        })
                        requests.append({
                            'updateTextStyle': {
                                'range': {
                                    'startIndex': current_index,
                                    'endIndex': current_index + len(text)
                                },
                                'textStyle': {
                                    'link': {
                                        'url': href
                                    }
                                },
                                'fields': 'link'
                            }
                        })
                        current_index += len(text)
                else:
                    requests.append({'insertText': {'location': {
                                    'index': current_index}, 'text': '\n' + child.text + '\n'}})
                    requests.append({
                        'updateTextStyle': {
                            'range': {'startIndex': current_index, 'endIndex': current_index + len(child.text)},
                            'textStyle': {
                                'weightedFontFamily': {
                                    'fontFamily': 'Arial',
                                    'weight': 400
                                },
                                'fontSize': {'magnitude': 12, 'unit': 'PT'}
                            },
                            'fields': 'weightedFontFamily,fontSize'
                        }
                    })
                    current_index += len(child.text) + 2  # Update index
        elif element.name == 'a':
                        text = element.get_text()
                        href = element.get('href')
                        requests.append({
                            'insertText': {
                                'location': {
                                    'index': current_index
                                },
                                'text': f"{text} "
                            }
                        })
                        requests.append({
                            'updateTextStyle': {
                                'range': {
                                    'startIndex': current_index,
                                    'endIndex': current_index + len(text)
                                },
                                'textStyle': {
                                    'link': {
                                        'url': href
                                    }
                                },
                                'fields': 'link'
                            }
                        })
                        current_index += len(text)

        elif element.name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            heading_level = element.name.upper()
            named_style_type = f'HEADING_{int(heading_level[1])}'
            requests.append({'insertText': {'location': {
                            'index': current_index}, 'text': element.text + '\n'}})
            requests.append({
                'updateParagraphStyle': {
                    'range': {'startIndex': current_index, 'endIndex': current_index + len(element.text)},
                    'paragraphStyle': {'namedStyleType': named_style_type},
                    'fields': 'namedStyleType'
                }
            })
            requests.append({
                'updateTextStyle': {
                    'range': {'startIndex': current_index, 'endIndex': current_index + len(element.text)},
                    'textStyle': {
                        'weightedFontFamily': {
                            'fontFamily': 'Arial',
                            'weight': 700
                        },
                        # Specify font size for headings
                        'fontSize': {'magnitude': 14, 'unit': 'PT'}
                    },
                    'fields': 'weightedFontFamily,fontSize'
                }
            })
            current_index += len(element.text) + 1  # Update index

        elif element.name == 'ol':
            for idx, li in enumerate(element.find_all('li')):
                if li.parent == element:
                    requests.append({
                        'insertText': {
                            'location': {
                                'index': current_index
                            },
                            'text': f"{idx + 1}. {li.text}\n"
                        }
                    })
                    requests.append({
                        'updateTextStyle': {
                            'range': {'startIndex': current_index, 'endIndex': current_index+len(li.text)+3},
                            'textStyle': {
                                'weightedFontFamily': {
                                    'fontFamily': 'Arial',
                                    'weight': 400
                                },
                                'fontSize': {
                                    'magnitude': 12,
                                    'unit': 'PT'
                                }
                            },
                            'fields': 'weightedFontFamily, fontSize'
                        }
                    })
                    requests.append({
                        'insertText': {
                            'location': {'index': current_index},
                            'text': f"\n"
                        }
                    })
                    current_index += len(li.text) + 3

                for elem in li.contents:
                    if elem.name == 'a':
                        text = elem.get_text()
                        href = elem.get('href')
                        requests.append({
                            'insertText': {
                                'location': {
                                    'index': current_index
                                },
                                'text': f"{text}  "
                            }
                        })
                        requests.append({
                            'updateTextStyle': {
                                'range': {
                                    'startIndex': current_index,
                                    'endIndex': current_index + len(text)
                                },
                                'textStyle': {
                                    'link': {
                                        'url': href
                                    }
                                },
                                'fields': 'link'
                            }
                        })
                        current_index += len(text)+3

            requests.append({
                'insertText': {
                    'location': {'index': current_index},
                    'text': f"\n\n"
                }
            })
            current_index += 2
        elif element.name == 'ul':
            for li in element.find_all('li'):
                if li.parent == element:
                    requests.append({
                        'insertText': {
                            'location': {
                                'index': current_index
                            },
                            'text': f"\u2022 {li.text}\n"
                        }
                    })
                    requests.append({
                        'updateTextStyle': {
                            'range': {'startIndex': current_index, 'endIndex': current_index+len(li.text)+3},
                            'textStyle': {
                                'weightedFontFamily': {
                                    'fontFamily': 'Arial',
                                    'weight': 400
                                },
                                'fontSize': {
                                    'magnitude': 12,
                                    'unit': 'PT'
                                }
                            },
                            'fields': 'weightedFontFamily, fontSize'
                        }
                    })
                    requests.append({
                        'insertText': {
                            'location': {'index': current_index},
                            'text': f"\n"
                        }
                    })
                    current_index += len(li.text) + 3

                for elem in li.contents:
                    if elem.name == 'a':
                        text = elem.get_text()
                        href = elem.get('href')
                        requests.append({
                            'insertText': {
                                'location': {
                                    'index': current_index
                                },
                                'text': f"{text} "
                            }
                        })
                        requests.append({
                            'updateTextStyle': {
                                'range': {
                                    'startIndex': current_index,
                                    'endIndex': current_index + len(text)
                                },
                                'textStyle': {
                                    'link': {
                                        'url': href
                                    }
                                },
                                'fields': 'link'
                            }
                        })
                        current_index += len(text)
                    

            requests.append({
                'insertText': {
                    'location': {'index': current_index},
                    'text': f"\n\n"
                }
            })
            current_index += 2
        

    print("\ncurrent_index = ", current_index)
    requests.append(
        {
            'updateParagraphStyle': {
                'range': {
                    'startIndex': 1,
                    'endIndex': current_index+1,
                },
                'paragraphStyle': {
                    'lineSpacing': 150,
                    'spaceAbove': {
                        'magnitude': 10.0,
                        'unit': 'PT'
                    },
                    'spaceBelow': {
                        'magnitude': 10.0,
                        'unit': 'PT'
                    }
                },
                'fields': 'lineSpacing'
            }
        }
    )
    return requests


gdocs_content = html_to_google_docs_requests(html_content)

main(gdocs_content)
