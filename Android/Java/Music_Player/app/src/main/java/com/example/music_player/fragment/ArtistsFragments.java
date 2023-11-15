package com.example.music_player.fragment;
import android.app.Activity;
import android.os.Bundle;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.example.music_player.Artitis.ArtistAdopter;
import com.example.music_player.Artitis.ArtistModel;
import com.example.music_player.R;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;


public class ArtistsFragments extends Fragment implements ArtistAdopter.Selectlistner  {
    View rootView;
    ArrayList<ArtistModel> arralbm = new ArrayList<>();
    RecyclerView recyclerView;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        rootView = inflater.inflate(R.layout.activity_album_main, container, false);
        recyclerView = rootView.findViewById(R.id.AlbumRecyclerView);

        Bundle arg = getArguments();
        arralbm = arg.getParcelableArrayList("ArtistList");
        //   Log.d("ARRAYLISTTTT", "onCreateView:"+arralbm);

        ArrayList<ArtistModel> filteredListOfArtists = new ArrayList<>();

        // Create a set to keep track of unique artist names
        Set<String> uniqueArtistNames = new HashSet<>();
        for (ArtistModel artistModel : arralbm) {
            String artistName = artistModel.getArtistName();

            // Check if the artist name is already in the set
            if (!uniqueArtistNames.contains(artistName)) {
                uniqueArtistNames.add(artistName);
                filteredListOfArtists.add(artistModel);
            }
        }
// Replace listOfArtist with the filtered list
        arralbm.clear();
        arralbm.addAll(filteredListOfArtists);

       recyclerView.setLayoutManager(new LinearLayoutManager(requireContext()));
        ArtistAdopter adopter = new ArtistAdopter(requireContext(), arralbm, (ArtistAdopter.Selectlistner) this);
        recyclerView.setAdapter(adopter);

        return rootView;
    }

    @Override
    public void onItemClicked(ArtistModel artistModel) {

    }
}

