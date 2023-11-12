import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Linking} from 'react-native';
import BackButton from '../components/Back__btn';

interface Repo {
  name: string;
  stargazers_count: number | null;
  forks_count: number | null;
}

export default function AboutDeveloper() {
  const [repo, setRepo] = useState<Repo | null>(null);

  useEffect(() => {
    fetchRepo();
  }, []);

  const fetchRepo = async () => {
    try {
      const response = await fetch(
        'https://api.github.com/repos/ZeeshanMukhtar1/BrainTrain-Native',
      );
      const data: Repo = await response.json();
      setRepo(data);
    } catch (error) {
      console.error('Error fetching repository data', error);
    }
  };

  const githubRepoUrl = 'https://github.com/ZeeshanMukhtar1/BrainTrain-Native';
  const linkedinProfileUrl = 'https://www.linkedin.com/in/zeeshanmukhtar1/';

  const handleOpenGitHub = () => {
    Linking.openURL(githubRepoUrl);
  };

  const handleOpenLinkedIn = () => {
    Linking.openURL(linkedinProfileUrl);
  };

  return (
    <View style={styles.main}>
      <Text style={styles.text}>Hey Genius Minds! 👋</Text>
      <Text style={styles.text}>
        The App Where Education Meets Entertainment! Elevate your knowledge
        through interactive challenges in an entertaining and engaging way. Let
        the fun begin, while you test and enhance your CS skills! 🚀🧠
      </Text>
      <Text style={styles.text}>
        If you like the app, please consider giving it a star on GitHub! ⭐
      </Text>
      {/* Display Repository Statistics */}
      <View style={styles.repoCard}>
        <View style={styles.repoHeader}>
          <Text style={styles.repoName}>{repo?.name || 'Loading...'}</Text>
          <Text style={styles.emoji}>🚀</Text>
        </View>
        <View style={styles.repoStats}>
          <Text style={styles.statsText}>
            Stars ⭐{' '}
            {repo?.stargazers_count !== null
              ? repo?.stargazers_count
              : 'Loading...'}
          </Text>
          <Text style={styles.statsText}>
            Forks 🍴{' '}
            {repo?.forks_count !== null ? repo?.forks_count : 'Loading...'}
          </Text>
        </View>
        {/* Button to open GitHub repository */}
        <TouchableOpacity
          style={styles.githubButton}
          onPress={handleOpenGitHub}>
          <Text style={styles.githubButtonText}>View on GitHub</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.auth__Text}>
          Made with ❤️ by{' '}
          <Text style={styles.link} onPress={handleOpenLinkedIn}>
            Zeeshan Mukhtar
          </Text>{' '}
          🚀
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#0F172A',
    paddingTop: 40,
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'justify',
    marginBottom: -120,
  },
  repoCard: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
  },
  repoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emoji: {
    marginLeft: 10,
    fontSize: 24,
  },
  repoName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  repoStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statsText: {
    color: 'rgba(256,256,256,0.7)',
    fontSize: 16,
    marginTop: 10,
  },
  githubButton: {
    backgroundColor: '#0F172A',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 40,
  },
  githubButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  auth__Text: {
    color: 'gray',
    fontSize: 13,
    textAlign: 'center',
  },
  link: {
    color: '#1A759F',
    textDecorationLine: 'underline',
  },
});
