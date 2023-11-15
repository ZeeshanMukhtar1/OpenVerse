package com.example.music_player.fragment;

import static androidx.core.util.TimeUtils.formatDuration;

import android.database.Cursor;
import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Parcelable;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.music_player.R;
import com.example.music_player.RecyclerSongAdopter;
import com.example.music_player.SongModelClass;

import java.util.ArrayList;

public class songFragment extends Fragment {
    View rootView;


    ArrayList<SongModelClass> listOfSong = new ArrayList<>();
    RecyclerView recyclerView;
    Cursor cursor;


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        rootView = inflater.inflate(R.layout.fragment_song, container, false);
        recyclerView = rootView.findViewById(R.id.rv2);


        Bundle args = getArguments();
        if (args != null) {
             listOfSong = args.getParcelableArrayList("songList");
            Log.d("arrsong","listOfSong songs = " + listOfSong.size());
        }

        recyclerView.setLayoutManager(new LinearLayoutManager(requireContext()));
        recyclerView.setAdapter(new RecyclerSongAdopter(getActivity().getApplicationContext(),listOfSong));

        return rootView;
    }
}

