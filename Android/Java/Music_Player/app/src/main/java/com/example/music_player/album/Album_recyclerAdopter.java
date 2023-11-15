package com.example.music_player.album;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.recyclerview.widget.RecyclerView;

import com.example.music_player.R;
import com.example.music_player.SongModelClass;

import java.util.ArrayList;

public class Album_recyclerAdopter extends RecyclerView.Adapter<Album_recyclerAdopter.ViewHolder> {

    Context context;
    ArrayList<AlbumStructer> arrAlbumStructure;

    public Album_recyclerAdopter(Context context, ArrayList<AlbumStructer> arrayList) {
        this.context = context;
        this.arrAlbumStructure = arrayList;

    }

    @NonNull
    @Override
    public Album_recyclerAdopter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
      View view =  LayoutInflater.from(context).inflate(R.layout.album_recyclerview,parent,false);
       ViewHolder viewHolder = new ViewHolder(view);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull Album_recyclerAdopter.ViewHolder holder, int position) {

        holder.A_img.setImageResource(arrAlbumStructure.get(position).img);
        holder.A_path.setText(arrAlbumStructure.get(position).path);
        holder.A_Artist.setText(arrAlbumStructure.get(position).Artist);
    }

    @Override
    public int getItemCount() {
        return arrAlbumStructure.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        TextView A_path, A_Artist;
        ImageView A_img;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            A_path = itemView.findViewById(R.id.A_path);
            A_Artist = itemView.findViewById(R.id.A_Artist);
            A_img = itemView.findViewById(R.id.A_img);
        }
    }

}
