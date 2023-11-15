package com.example.music_player;

import android.os.Bundle;
import android.os.Parcelable;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import androidx.viewpager2.adapter.FragmentStateAdapter;

import com.example.music_player.Artitis.ArtistModel;
import com.example.music_player.fragment.AlbumFragment;
import com.example.music_player.fragment.ArtistsFragments;
import com.example.music_player.fragment.songFragment;

import java.util.ArrayList;

public class fragment_manager extends FragmentStateAdapter {

    Recycler_View recyclerView;
    ArrayList<SongModelClass> listOfSong;
    ArrayList<ArtistModel> listOfArtist;

    public fragment_manager(@NonNull FragmentActivity fragmentActivity, ArrayList<SongModelClass> list, ArrayList<ArtistModel> artist) {
        super(fragmentActivity);
        listOfSong = list;
        listOfArtist = artist;
    }

    @NonNull
    @Override
    public Fragment createFragment(int position) {
        Log.d("fragment =", "size song = " + listOfSong.size());
        switch (position) {

            case 0:
                return new AlbumFragment();

            case 1:
                ArtistsFragments artfrag = new ArtistsFragments();
                Bundle bundle1 = new Bundle();
                    bundle1.putParcelableArrayList("ArtistList", listOfArtist);
                artfrag.setArguments(bundle1);
                Log.d("fragmentmanager","listOfArtist :"+listOfArtist.size());
                return artfrag;

            case 2:
                songFragment songFrag = new songFragment();
                Bundle bundle = new Bundle();
                bundle.putParcelableArrayList("songList", listOfSong);
                songFrag.setArguments(bundle);
                return songFrag;

            default:
                return new songFragment();

        }
    }

    @Override
    public int getItemCount() {
        return 10;
    }

}
