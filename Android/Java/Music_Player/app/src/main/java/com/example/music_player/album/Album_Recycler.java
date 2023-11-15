package com.example.music_player.album;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import com.example.music_player.R;

import java.util.ArrayList;

public class Album_Recycler extends AppCompatActivity {

    ArrayList<AlbumStructer> arrAlbumStructure = new ArrayList<>();
   RecyclerView  album_recycler;

    RecyclerView.LayoutManager layoutManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_album_recycler);

        album_recycler = findViewById(R.id.album_recycler2);

        layoutManager = new GridLayoutManager(this,2);
        album_recycler.setLayoutManager(layoutManager);

        arrAlbumStructure.add(new AlbumStructer(R.drawable.img_1,"download","song"));
        arrAlbumStructure.add(new AlbumStructer(R.drawable.img_1,"SDcard","funny sond"));
        arrAlbumStructure.add(new AlbumStructer(R.drawable.img_1,"whatsApp","voice massages"));

      Album_recyclerAdopter adopter = new Album_recyclerAdopter(this,arrAlbumStructure);
      album_recycler.setAdapter(adopter);

    }
}