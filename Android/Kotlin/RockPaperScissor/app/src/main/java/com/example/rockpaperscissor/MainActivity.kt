package com.example.rockpaperscissor

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnPlayWithOther = findViewById<Button>(R.id.btnPlayWithOther)
        btnPlayWithOther.setOnClickListener{
            val intent = Intent(this,PlayWithOther::class.java)
            startActivity(intent)
        }
        val btnPlayWithComp:Button = findViewById(R.id.btnPlayWithComputer)
        btnPlayWithComp.setOnClickListener{
            //Todo..........
        }
        val tvInstruction:TextView = findViewById(R.id.tvInstruction)
        tvInstruction.setOnClickListener {
            //Todo...........
        }
    }
}