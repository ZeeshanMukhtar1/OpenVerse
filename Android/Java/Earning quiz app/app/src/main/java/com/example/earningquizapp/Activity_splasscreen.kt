package com.example.earningquizapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.os.Looper

class Activity_splasscreen : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splasscreen)


        Handler(Looper.getMainLooper())
            .postDelayed({
                startActivity(Intent(this,MainActivity1::class.java))
                finish()
            },3000
            )
    }
}