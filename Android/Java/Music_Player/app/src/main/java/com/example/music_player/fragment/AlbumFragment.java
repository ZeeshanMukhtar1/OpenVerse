package com.example.music_player.fragment;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.music_player.R;
import com.example.music_player.album.AlbumStructer;
import com.example.music_player.album.Album_recyclerAdopter;

import java.util.ArrayList;


public class AlbumFragment extends Fragment {

    ArrayList<AlbumStructer> arrAlbumStructure = new ArrayList<>();
    RecyclerView  album_recycler;
    View rootView;
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {



        // Inflate the layout for this fragment
        rootView = inflater.inflate(R.layout.fragment_album, container, false);
       album_recycler = rootView.findViewById(R.id.rv3);
       album_recycler.setLayoutManager(new LinearLayoutManager(requireContext()));

        GridLayoutManager layoutManager = new GridLayoutManager(requireContext(), 2);
        album_recycler.setLayoutManager(layoutManager);

        arrAlbumStructure.add(new AlbumStructer(R.drawable.img_1,"download","song"));
        arrAlbumStructure.add(new AlbumStructer(R.drawable.img_1,"SDcard","funny sond"));
        arrAlbumStructure.add(new AlbumStructer(R.drawable.img_1,"whatsApp","voice massages"));

        Album_recyclerAdopter adoptr = new Album_recyclerAdopter(requireContext(),arrAlbumStructure);
        album_recycler.setAdapter(adoptr);

        return rootView;
    }
}