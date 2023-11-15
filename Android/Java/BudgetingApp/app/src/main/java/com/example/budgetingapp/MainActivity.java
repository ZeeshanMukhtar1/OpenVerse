package com.example.budgetingapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

    }


    public void goToExpenseScreen(View view) {
        Intent intent = new Intent(this,MainActivity3.class);
        startActivity(intent);
    }
    public void goToIncomeScreen(View view) {
        Intent intent = new Intent(this,MainActivity2.class);
        startActivity(intent);
    }
}