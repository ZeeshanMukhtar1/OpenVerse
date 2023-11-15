package com.example.music_player;

import android.os.Parcel;
import android.os.Parcelable;

import androidx.annotation.NonNull;

import java.io.Serializable;

public class SongModelClass implements Serializable , Parcelable {
    int img;
    String songName, path;
    String duration;
    public SongModelClass(int img, String songName, String path, String duration){
        this.img = img;
        this.songName = songName;
        this.path = path;
        this.duration = duration;
    }

    public SongModelClass(int img_1, String title, String artist) {
    }


    protected SongModelClass(Parcel in) {
        img = in.readInt();
        songName = in.readString();
        path = in.readString();
        duration = in.readString();
    }

    public static final Creator<SongModelClass> CREATOR = new Creator<SongModelClass>() {
        @Override
        public SongModelClass createFromParcel(Parcel in) {
            return new SongModelClass(in);
        }

        @Override
        public SongModelClass[] newArray(int size) {
            return new SongModelClass[size];
        }
    };

    public int getImg() {
        return img;
    }

    public void setImg(int img) {
        this.img = img;
    }

    public String getSongName() {
        return songName;
    }

    public void setSongName(String songName) {
        this.songName = songName;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }



    public void setDuration(String duration) {
        this.duration = duration;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(@NonNull Parcel dest, int flags) {
        dest.writeInt(img);
        dest.writeString(songName);
        dest.writeString(path);
        dest.writeString(duration);
    }
}
