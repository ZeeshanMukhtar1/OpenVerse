package com.example.music_player.Artitis;

import android.os.Parcel;
import android.os.Parcelable;

import androidx.annotation.NonNull;

import java.io.Serializable;

public class ArtistModel implements Serializable, Parcelable {

    int img;
    String Artist, CountSong,CountAlbum;
    private java.lang.String String;

    public ArtistModel(int img, java.lang.String artist) {
        this.img = img;
        Artist = artist;
//        CountSong = countSong;
//        CountAlbum = countAlbum;
//        String = string;
    }

    protected ArtistModel(Parcel in) {
        img = in.readInt();
        Artist = in.readString();
        CountSong = in.readString();
        CountAlbum = in.readString();
        String = in.readString();
    }

    public static final Creator<ArtistModel> CREATOR = new Creator<ArtistModel>() {
        @Override
        public ArtistModel createFromParcel(Parcel in) {
            return new ArtistModel(in);
        }

        @Override
        public ArtistModel[] newArray(int size) {
            return new ArtistModel[size];
        }
    };

    public int getImg() {
        return img;
    }

    public String getArtistName() {
        return Artist;
    }

    public String getCountSong() {
        return CountSong;
    }

    public String getCountAlbum() {
        return CountAlbum;
    }


    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(@NonNull Parcel dest, int flags) {
        dest.writeInt(img);
        dest.writeString(Artist);
        dest.writeString(CountSong);
        dest.writeString(CountAlbum);
        dest.writeString(String);
    }
}
