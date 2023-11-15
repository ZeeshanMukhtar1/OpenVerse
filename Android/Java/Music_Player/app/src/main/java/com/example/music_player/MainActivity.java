package com.example.music_player;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewpager2.widget.ViewPager2;
import android.Manifest;
import android.annotation.SuppressLint;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Log;
import android.view.MenuItem;
import android.view.WindowManager;
import android.widget.TextView;
import android.widget.Toast;
import com.example.music_player.Artitis.ArtistModel;
import com.google.android.material.navigation.NavigationView;
import com.google.android.material.tabs.TabLayout;

import java.util.ArrayList;



public class MainActivity extends AppCompatActivity {

    TabLayout tabAlbum, tabArtist, tablayout, tabSong;
    DrawerLayout drawe_Layout;
    NavigationView navigation;
    ActionBarDrawerToggle toggle;
    Toolbar toolbar;
     TextView A_path;
    RecyclerView recyclerView;
    fragment_manager myViewPageAdopeter;
    ViewPager2 viewPager2;
    ArrayList<SongModelClass> listOfSongs = new ArrayList<>();
    ArrayList<ArtistModel> listOfArtist = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        recyclerView = findViewById(R.id.recyclerview1);
        toolbar = findViewById(R.id.toolbar);
        tabAlbum = findViewById(R.id.tabAlbum);
        tabArtist = findViewById(R.id.tabArtist);
        tabSong = findViewById(R.id.tabSong);
        tablayout = findViewById(R.id.tablayout);
        viewPager2 = findViewById(R.id.viewPager2);
        A_path = findViewById(R.id.A_path);
        setSupportActionBar(toolbar);




        if (checkPermission()==false){
            requestPermission();
        }else{
            getSongsData();
        }

        myViewPageAdopeter = new fragment_manager(this,listOfSongs, listOfArtist);
        viewPager2.setAdapter(myViewPageAdopeter);
        viewPager2.registerOnPageChangeCallback(new ViewPager2.OnPageChangeCallback() {
            @Override
            public void onPageSelected(int position) {
                super.onPageSelected(position);
                tablayout.getTabAt(position).select();
            }
        });

        Log.d("aaa", "");
        drawe_Layout = findViewById(R.id.drawe_Layout);
        navigation = findViewById(R.id.navigation);

        toggle = new ActionBarDrawerToggle(this, drawe_Layout, toolbar, R.string.open, R.string.close);
        drawe_Layout.addDrawerListener(toggle);
        toggle.syncState();

        tablayout.addOnTabSelectedListener(new TabLayout.OnTabSelectedListener() {
            @Override
            public void onTabSelected(TabLayout.Tab tab) {
                viewPager2.setCurrentItem(tab.getPosition());
            }

            @Override
            public void onTabUnselected(TabLayout.Tab tab) {

            }

            @Override
            public void onTabReselected(TabLayout.Tab tab) {

            }
        });

        navigation.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                if (item.getItemId() == R.id.m_Library) {
                    Toast.makeText(MainActivity.this, "Click on Library", Toast.LENGTH_SHORT).show();

                } else if (item.getItemId() == R.id.m_EQUALIZER) {
                    Toast.makeText(MainActivity.this, "Click on Equlizer", Toast.LENGTH_SHORT).show();
                } else if (item.getItemId() == R.id.m_Cutter) {
                    Toast.makeText(MainActivity.this, "Click on MP3 Cutter", Toast.LENGTH_SHORT).show();
                } else if (item.getItemId() == R.id.m_Playlist) {
                    Toast.makeText(MainActivity.this, "Click on Playlist", Toast.LENGTH_SHORT).show();
                } else if (item.getItemId() == R.id.m_Queue) {
                    Toast.makeText(MainActivity.this, "Click on Queue", Toast.LENGTH_SHORT).show();
                } else if (item.getItemId() == R.id.m_DriveMode) {
                    Toast.makeText(MainActivity.this, "Click on Driver Mode", Toast.LENGTH_SHORT).show();
                } else if (item.getItemId() == R.id.m_Timer) {
                    Toast.makeText(MainActivity.this, "Click on Timer", Toast.LENGTH_SHORT).show();
                } else if (item.getItemId() == R.id.m_theme) {
                    Toast.makeText(MainActivity.this, "Click on Theme", Toast.LENGTH_SHORT).show();
                } else if (item.getItemId() == R.id.m_Record) {
                    Toast.makeText(MainActivity.this, "Record", Toast.LENGTH_SHORT).show();
                } else if (item.getItemId() == R.id.m_setiing) {
                    Toast.makeText(MainActivity.this, "Click on Setting", Toast.LENGTH_SHORT).show();
                }
                drawe_Layout.closeDrawer(GravityCompat.START);
                return false;
            }
        });
    }

    public String Duration(Long duration) {
        long totalSeconds = duration / 1000;
        long seconds = totalSeconds % 60;
        long totalMinutes = totalSeconds / 60;
        long minutes = totalMinutes % 60;
        return String.format("%02d:%02d", minutes, seconds);
    }

    public void getSongsData(){
        String[] projection = {
                MediaStore.Audio.Media._ID,
                MediaStore.Audio.Media.TITLE,
                MediaStore.Audio.Media.RELATIVE_PATH,
                MediaStore.Audio.Media.ARTIST,
                MediaStore.Audio.Media.DURATION
        };
        //String selection = MediaStore.Audio.Media.IS_MUSIC + "!= 0";
        String order = MediaStore.Audio.Media.TITLE + " ASC";
        String selection = MediaStore.Audio.Media._ID + "!=0";
        Cursor cursor = getContentResolver().query(MediaStore.Audio.Media.EXTERNAL_CONTENT_URI,projection,selection,null,order);

        while (cursor.moveToNext()) {

            @SuppressLint("Range") String title = cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.TITLE));
            @SuppressLint("Range") Long duration = cursor.getLong(cursor.getColumnIndex(MediaStore.Audio.Media.DURATION));
            @SuppressLint("Range") String path = cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.RELATIVE_PATH));
            @SuppressLint("Range") String artist = cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.ARTIST));

            String[] pathParts = path.split("[\\\\/]");
            String lastSegment = pathParts[pathParts.length - 1];

            String durationFormatted = Duration(duration);
            SongModelClass songData = new SongModelClass(R.drawable.img_1,title,lastSegment,durationFormatted);
            Log.d("songData","songData1 = " +songData.getSongName());
            Log.d("songData","songData1 = " +title);
            listOfSongs.add(songData);
            ArtistModel artistModel = new ArtistModel(R.drawable.img_1,artist);
            Log.d("artist","artistList =" + artistModel);
            listOfArtist.add(artistModel);

        }
    }

    boolean checkPermission(){
        int result = ContextCompat.checkSelfPermission(this, Manifest.permission.READ_EXTERNAL_STORAGE);
        if (result == PackageManager.PERMISSION_GRANTED){
            return true;
        } else {
            return false;
        }
    }
    void  requestPermission(){
        if (ActivityCompat.shouldShowRequestPermissionRationale(this, Manifest.permission.READ_EXTERNAL_STORAGE)){
            Toast.makeText(this, "READ THE PERMISSION AND ALLOW THE SETTING", Toast.LENGTH_SHORT).show();
        }
        ActivityCompat.requestPermissions(this,
                new String[]{Manifest.permission.READ_EXTERNAL_STORAGE},1);
    }
}
