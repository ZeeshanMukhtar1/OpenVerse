package com.example.music_player;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public  class RecyclerSongAdopter extends RecyclerView.Adapter<RecyclerSongAdopter.ViewHolder> {

    Context context;
    ArrayList<SongModelClass> arrSongName;


    public RecyclerSongAdopter(Context context, ArrayList<SongModelClass> arrSongName){
        this.context = context;
        this.arrSongName = arrSongName;

    }



    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
       View view = LayoutInflater.from(context).inflate(R.layout.cardview,parent,false);
       ViewHolder viewHolder = new ViewHolder(view);
        return new RecyclerSongAdopter.ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        SongModelClass songData = arrSongName.get(position);

        holder.imgSong.setImageResource(arrSongName.get(position).img);
        Log.d("abc","img = "+arrSongName.get(position).img+"");
        holder.songName.setText(arrSongName.get(position).songName);
        Log.d("def","songName = "+arrSongName.get(position).songName+"");
        holder.path.setText(arrSongName.get(position).path);
        Log.d("ghi","path = "+arrSongName.get(position).path+"");
        holder.duration.setText(arrSongName.get(position).duration.toString());
        Log.d("klm","duration ="+arrSongName.get(position).duration+"");
    }

    @Override
    public int getItemCount() {

        return arrSongName.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        TextView songName, path ,duration;
        ImageView imgSong;
        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            songName = itemView.findViewById(R.id.R_songName);
            path = itemView.findViewById(R.id.R_path);
            duration = itemView.findViewById(R.id.R_duration);
            imgSong = itemView.findViewById(R.id.R_img);
        }
    }

}
