package com.eglacorp.radiofgusa;

import java.lang.reflect.Field;

import android.app.Activity;
import android.os.Bundle;

public class StandAlone extends DroidGap {
	
	@Override
	public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
       // super.loadUrl("http://www.webdesignertricks.com/fgradio/");                        
        super.loadUrl("file:///android_asset/screen3.html");
        //super.loadUrl("http://184.107.48.78/texasam/pg/iphone/home/");
    }		
	
}
