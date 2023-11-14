package com.example.tareensportsacademy;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity3 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main3);

        Button button = findViewById(R.id.submit);

        button.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view)
            {

                Intent intent = new Intent(MainActivity3.this, MainActivity2.class);

                startActivity(intent);

                finish();
            };
        });
    }
}