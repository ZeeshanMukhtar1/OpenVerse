package com.example.music_player.Artitis;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import com.example.music_player.R;
import com.example.music_player.RecyclerSongAdopter;
import com.example.music_player.SongModelClass;
import com.example.music_player.album.AlbumStructer;
import com.example.music_player.album.Album_recyclerAdopter;

import java.util.ArrayList;

public class ArtistSongList extends AppCompatActivity {

    ArrayList<AlbumStructer> arrArtSongList = new ArrayList<>();
    RecyclerView recyclerView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_artist_song_list);

        recyclerView = findViewById(R.id.aristSongRv);

        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        Album_recyclerAdopter adoptr = new Album_recyclerAdopter(this,arrArtSongList);
        recyclerView.setAdapter(adoptr);

    }
}