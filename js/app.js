function randomise(){
    
    var weapon_list = ["わかば","ボールド","シャープマーカー","モデラー","スプシュ",
    ".52ガロン",".96ガロン","N-ZAP","プライム","ジェット","L3リール", "H3リール",
    "ボトルガイザー","マニュ","クアッド","デュアル","スパッタリー","ケルビン","バレルスピナー",
    "スプスピ","クーゲル","ハイドラ","ノーチラス","ノヴァ","ホット","ロンブラ","クラブラ",
    "ラピブラ","ラピエリ","スプチャ","スプスコ","リッター4K","4Kスコープ","スクイク",
    "竹","ソイチュ","バケスロ","スクスロ","ヒッセン","オバフロ","エクスロ","パラシェルター",
    "キャンシェル","スパガ","スプラローラー","カーボンローラー","ヴァリアブル","ダイナモ","パブロ",
    "ホクサイ"];

    var sheet0 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet0 = weapon_list[sheet0];
    weapon_list.splice(sheet0, 1);

    var sheet1 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet1 = weapon_list[sheet1];
    weapon_list.splice(sheet1, 1);

    var sheet2 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet2 = weapon_list[sheet2];
    weapon_list.splice(sheet2, 1);

    var sheet3 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet3 = weapon_list[sheet3];
    weapon_list.splice(sheet3, 1);

    var sheet4 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet4 = weapon_list[sheet4];
    weapon_list.splice(sheet4, 1);

    var sheet5 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet5 = weapon_list[sheet5];
    weapon_list.splice(sheet5, 1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var weapon_sheet6 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet6, 1);

    var weapon_sheet7 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet7, 1);

    var weapon_sheet8 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet8, 1);

    var weapon_sheet9 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet9, 1);

    var weapon_sheet10 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet10, 1);

    var weapon_sheet11 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet11, 1);

    var weapon_sheet12 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet12, 1);

    var weapon_sheet13 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet13, 1);

    var weapon_sheet14 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet14, 1);

    var weapon_sheet15 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet15, 1);

    var weapon_sheet16 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet16, 1);

    var weapon_sheet17 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet17, 1);

    var weapon_sheet18 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet18, 1);

    var weapon_sheet19 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet19, 1);

    var weapon_sheet20 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet20, 1);

    var weapon_sheet21 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet21, 1);

    var weapon_sheet22 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet22, 1);

    var weapon_sheet23 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet23, 1);

    var weapon_sheet24 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(weapon_sheet24, 1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// あと作成ボタンの削除

    var weapons = [weapon_sheet0,weapon_sheet1,weapon_sheet2,weapon_sheet3,weapon_sheet4,
    weapon_sheet5,weapon_sheet6,weapon_sheet7,weapon_sheet8,weapon_sheet9,weapon_sheet10,
    weapon_sheet11,weapon_sheet12,weapon_sheet13,weapon_sheet14,weapon_sheet15,weapon_sheet16,
    weapon_sheet17,weapon_sheet18,weapon_sheet19,weapon_sheet20,weapon_sheet21,weapon_sheet22,
    weapon_sheet23,weapon_sheet24];



    var weaponButton0 = document.createElement( "BUTTON" );
    weaponButton0.textContent = weapon_sheet0;
    document.getElementById( "weapon0" ).appendChild( weaponButton0 );

    var weaponButton1 = document.createElement( "BUTTON" );
    weaponButton1.textContent = weapon_sheet1;
    document.getElementById( "weapon1" ).appendChild( weaponButton1 );

    var weaponButton2 = document.createElement( "BUTTON" );
    weaponButton2.textContent = weapon_sheet2;
    document.getElementById( "weapon2" ).appendChild( weaponButton2 );


    var weaponButton3 = document.createElement( "BUTTON" );
    weaponButton3.textContent = weapon_sheet3;
    document.getElementById( "weapon3" ).appendChild( weaponButton3 );

    var weaponButton4 = document.createElement( "BUTTON" );
    weaponButton4.textContent = weapon_sheet4;
    document.getElementById( "weapon4" ).appendChild( weaponButton4 );

    var weaponButton5 = document.createElement( "BUTTON" );
    weaponButton5.textContent = weapon_sheet5;
    document.getElementById( "weapon5" ).appendChild( weaponButton5 );

    var weaponButton6 = document.createElement( "BUTTON" );
    weaponButton6.textContent = weapon_sheet6;
    document.getElementById( "weapon6" ).appendChild( weaponButton6 );

    var weaponButton7 = document.createElement( "BUTTON" );
    weaponButton7.textContent = weapon_sheet7;
    document.getElementById( "weapon7" ).appendChild( weaponButton7 );

    var weaponButton8 = document.createElement( "BUTTON" );
    weaponButton8.textContent = weapon_sheet8;
    document.getElementById( "weapon8" ).appendChild( weaponButton8 );

    var weaponButton9 = document.createElement( "BUTTON" );
    weaponButton9.textContent = weapon_sheet9;
    document.getElementById( "weapon9" ).appendChild( weaponButton9 );

    var weaponButton10 = document.createElement( "BUTTON" );
    weaponButton10.textContent = weapon_sheet10;
    document.getElementById( "weapon10" ).appendChild( weaponButton10 );

    var weaponButton11 = document.createElement( "BUTTON" );
    weaponButton11.textContent = weapon_sheet11;
    document.getElementById( "weapon11" ).appendChild( weaponButton11 );

    var weaponButton12= document.createElement( "BUTTON" );
    weaponButton12.textContent = weapon_sheet12;
    document.getElementById( "weapon12" ).appendChild( weaponButton12 );

    var weaponButton13= document.createElement( "BUTTON" );
    weaponButton13.textContent = weapon_sheet13;
    document.getElementById( "weapon13" ).appendChild( weaponButton13 );

    var weaponButton14= document.createElement( "BUTTON" );
    weaponButton14.textContent = weapon_sheet14;
    document.getElementById( "weapon14" ).appendChild( weaponButton14 );

    var weaponButton15= document.createElement( "BUTTON" );
    weaponButton15.textContent = weapon_sheet15;
    document.getElementById( "weapon15" ).appendChild( weaponButton15 );

    var weaponButton16= document.createElement( "BUTTON" );
    weaponButton16.textContent = weapon_sheet16;
    document.getElementById( "weapon16" ).appendChild( weaponButton16 );

    var weaponButton17= document.createElement( "BUTTON" );
    weaponButton17.textContent = weapon_sheet17;
    document.getElementById( "weapon17" ).appendChild( weaponButton17 );

    var weaponButton18= document.createElement( "BUTTON" );
    weaponButton18.textContent = weapon_sheet18;
    document.getElementById( "weapon18" ).appendChild( weaponButton18 );

    var weaponButton19= document.createElement( "BUTTON" );
    weaponButton19.textContent = weapon_sheet19;
    document.getElementById( "weapon19" ).appendChild( weaponButton19 );

    var weaponButton20= document.createElement( "BUTTON" );
    weaponButton20.textContent = weapon_sheet20;
    document.getElementById( "weapon20" ).appendChild( weaponButton20 );

    var weaponButton21= document.createElement( "BUTTON" );
    weaponButton21.textContent = weapon_sheet21;
    document.getElementById( "weapon21" ).appendChild( weaponButton21 );

    var weaponButton22= document.createElement( "BUTTON" );
    weaponButton22.textContent = weapon_sheet22;
    document.getElementById( "weapon22" ).appendChild( weaponButton22 );

    var weaponButton23= document.createElement( "BUTTON" );
    weaponButton23.textContent = weapon_sheet23;
    document.getElementById( "weapon23" ).appendChild( weaponButton23 );

}

