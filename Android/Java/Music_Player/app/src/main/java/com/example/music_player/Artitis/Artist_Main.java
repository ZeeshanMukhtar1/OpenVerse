package com.example.music_player.Artitis;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import com.example.music_player.R;
import com.example.music_player.SongModelClass;

import java.util.ArrayList;

public class Artist_Main extends AppCompatActivity implements ArtistAdopter.Selectlistner {

    ArrayList<ArtistModel> listOfArtist = new ArrayList<>();
    ArrayList<SongModelClass> listOfSong;
    RecyclerView recyclerView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_album_main);
        recyclerView = findViewById(R.id.AlbumRecyclerView);

        Bundle bundle = getIntent().getExtras();
        if (bundle != null) {
            ArrayList<ArtistModel> list = bundle.getParcelableArrayList("list");
            if(!list.isEmpty()){
                listOfArtist.addAll(list);
            }
        } else {

        }

        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        ArtistAdopter adopter = new ArtistAdopter(this,listOfArtist,this);
        recyclerView.setAdapter(adopter);
    }

//    final public Bundle getArguments() {
//        Bundle mArguments = null;
//        return mArguments;
//    }

    @Override
    public void onItemClicked(ArtistModel artistModel) {

    }

}