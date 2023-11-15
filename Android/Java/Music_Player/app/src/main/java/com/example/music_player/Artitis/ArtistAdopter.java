package com.example.music_player.Artitis;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.example.music_player.R;
import com.example.music_player.SongModelClass;


import java.util.ArrayList;

public  class ArtistAdopter extends RecyclerView.Adapter<ArtistAdopter.ViewHolder> {
    Context context;
    ArrayList<ArtistModel> listOfArtist;

    ArrayList<SongModelClass> listOfSong;

    Selectlistner listner;

    public ArtistAdopter(Context context, ArrayList<ArtistModel> arrAlbum,Selectlistner listner) {
        this.context = context;
        this.listOfArtist = arrAlbum;
        Log.d("fargmentArtistlist","list of Artist size ="+listOfArtist);
        this.listner = listner;

    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
       View view =  LayoutInflater.from(context).inflate(R.layout.album_cardview,parent,false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        holder.imgAlbum.setImageResource( listOfArtist.get(position).img);
        holder.ArtistName.setText( listOfArtist.get(position).Artist);
        holder.CountAlbum.setText( listOfArtist.get(position).CountAlbum);
        holder.CountSong.setText(listOfArtist.get(position).CountSong);

        holder.cardView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(context, listOfArtist.get(position).getArtistName(), Toast.LENGTH_SHORT).show();

                Intent intent = new Intent(context, Artist_Main.class);
                Bundle bundle = new Bundle();
                bundle.putParcelableArrayList("list", listOfArtist);
                intent.putExtras(bundle);
                context.startActivity(intent,bundle);
            }

        });

    }

    @Override
    public int getItemCount() {
        return  listOfArtist.size();
      //  Log.d("arrySize","listOfArraySize :"+ listOfArtist.size());
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        ImageView imgAlbum;
        TextView ArtistName, CountSong,CountAlbum;
        CardView cardView;
        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            imgAlbum = itemView.findViewById(R.id.Ar_img);
            ArtistName = itemView.findViewById(R.id.Ar_Artist);
            CountSong = itemView.findViewById(R.id.Ar_countSong);
            CountAlbum = itemView.findViewById(R.id.Ar_countAlbum);
            cardView = itemView.findViewById(R.id.card2);
        }
    }
    public interface Selectlistner {
        void onItemClicked(ArtistModel artistModel);
    }
}
