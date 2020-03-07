function randomise(){
    
    var weapon_list = ["わかばシューター","ボールドマーカー","シャープマーカー","プロモデラー","スプラシューター",
    ".52ガロン",".96ガロン","N-ZAP","プライムシューター","ジェットスイーパー","L3リールガン", "H3リールガン",
    "ボトルガイザー","スプラマニューバー","クアッドホッパー","デュアルスイーパー","スパッタリー","ケルビン","バレルスピナー",
    "スプラスピナー","クーゲルシュライバー","ハイドラント","ノーチラス","ノヴァ","ホットブラスター","ロングブラスター","クラッシュブラスター",
    "ラピッドブラスター","Rブラスターエリート","スプラチャージャー","スプラスコープ","リッター4K","4Kスコープ","スクイックリン",
    "14式竹筒銃","ソイチューバー","バケットスロッシャー","スクリュースロッシャー","ヒッセン","オーバーフロッシャー","エクスプロッシャー","パラシェルター",
    "キャンピングシェルター","スパイガジェット","スプラローラー","カーボンローラー","ヴァリアブルローラー","ダイナモローラー","パブロ",
    "ホクサイ"];

    //length=配列の要素数取得
    //splice=要素の取り除き
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

    var sheet6 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet6 = weapon_list[sheet6];
    weapon_list.splice(sheet6, 1);

    var sheet7 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet7 = weapon_list[sheet7];
    weapon_list.splice(sheet7, 1);

    var sheet8 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet8 = weapon_list[sheet8];
    weapon_list.splice(sheet8, 1);

    var sheet9 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet9 = weapon_list[sheet9];
    weapon_list.splice(sheet9, 1);

    var sheet10 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet10 = weapon_list[sheet10];
    weapon_list.splice(sheet10, 1);

    var sheet11 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet11 = weapon_list[sheet11];
    weapon_list.splice(sheet11, 1);

    var sheet12 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet12 = weapon_list[sheet12];
    weapon_list.splice(sheet12, 1);

    var sheet13 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet13 = weapon_list[sheet13];
    weapon_list.splice(sheet13, 1);

    var sheet14 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet14 = weapon_list[sheet14];
    weapon_list.splice(sheet14, 1);

    var sheet15 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet15 = weapon_list[Math.floor(Math.random() * weapon_list.length)];
    weapon_list.splice(sheet15, 1);

    var sheet16 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet16 = weapon_list[sheet16];
    weapon_list.splice(sheet16, 1);

    var sheet17 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet17 = weapon_list[sheet17];
    weapon_list.splice(sheet17, 1);

    var sheet18 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet18 = weapon_list[sheet18];
    weapon_list.splice(sheet18, 1);

    var sheet19 = Math.floor(Math.random() * weapon_list.length)   
    var weapon_sheet19 = weapon_list[sheet19];
    weapon_list.splice(sheet19, 1);

    var sheet20 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet20 = weapon_list[sheet20];
    weapon_list.splice(sheet20, 1);

    var sheet21 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet21 = weapon_list[sheet21];
    weapon_list.splice(sheet21, 1);

    var sheet22= Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet22 = weapon_list[sheet22];
    weapon_list.splice(sheet22, 1);

    var sheet23 = Math.floor(Math.random() * weapon_list.length)
    var weapon_sheet23 = weapon_list[sheet23];
    weapon_list.splice(sheet23, 1);

    var weapons = [weapon_sheet0,weapon_sheet1,weapon_sheet2,weapon_sheet3,weapon_sheet4,
    weapon_sheet5,weapon_sheet6,weapon_sheet7,weapon_sheet8,weapon_sheet9,weapon_sheet10,
    weapon_sheet11,weapon_sheet12,weapon_sheet13,weapon_sheet14,weapon_sheet15,weapon_sheet16,
    weapon_sheet17,weapon_sheet18,weapon_sheet19,weapon_sheet20,weapon_sheet21,weapon_sheet22,
    weapon_sheet23];

    var weaponButton0=document.createTextNode(weapon_sheet0)
    document.getElementById( "weapon0" ).appendChild( weaponButton0 );
    
    var weaponButton1=document.createTextNode(weapon_sheet1)
    document.getElementById( "weapon1" ).appendChild( weaponButton1 );

    var weaponButton2=document.createTextNode(weapon_sheet2)
    document.getElementById( "weapon2" ).appendChild( weaponButton2 );

    var weaponButton3=document.createTextNode(weapon_sheet3)
    document.getElementById( "weapon3" ).appendChild( weaponButton3 );

    var weaponButton4=document.createTextNode(weapon_sheet4)
    document.getElementById( "weapon4" ).appendChild( weaponButton4 );

    var weaponButton5=document.createTextNode(weapon_sheet5)
    document.getElementById( "weapon5" ).appendChild( weaponButton5 );

    var weaponButton6=document.createTextNode(weapon_sheet6)
    document.getElementById( "weapon6" ).appendChild( weaponButton6 );

    var weaponButton7=document.createTextNode(weapon_sheet7)
    document.getElementById( "weapon7" ).appendChild( weaponButton7 );

    var weaponButton8=document.createTextNode(weapon_sheet8)
    document.getElementById( "weapon8" ).appendChild( weaponButton8 );

    var weaponButton9=document.createTextNode(weapon_sheet9)
    document.getElementById( "weapon9" ).appendChild( weaponButton9 );

    var weaponButton10=document.createTextNode(weapon_sheet10)
    document.getElementById( "weapon10" ).appendChild( weaponButton10 );

    var weaponButton11=document.createTextNode(weapon_sheet11)
    document.getElementById( "weapon11" ).appendChild( weaponButton11 );

    var weaponButton12=document.createTextNode(weapon_sheet12)
    document.getElementById( "weapon12" ).appendChild( weaponButton12 );

    var weaponButton13=document.createTextNode(weapon_sheet13)
    document.getElementById( "weapon13" ).appendChild( weaponButton13 );

    var weaponButton14=document.createTextNode(weapon_sheet14)
    document.getElementById( "weapon14" ).appendChild( weaponButton14 );

    var weaponButton15=document.createTextNode(weapon_sheet15)
    document.getElementById( "weapon15" ).appendChild( weaponButton15 );

    var weaponButton16=document.createTextNode(weapon_sheet16)
    document.getElementById( "weapon16" ).appendChild( weaponButton16 );

    var weaponButton17=document.createTextNode(weapon_sheet17)
    document.getElementById( "weapon17" ).appendChild( weaponButton17 );

    var weaponButton18=document.createTextNode(weapon_sheet18)
    document.getElementById( "weapon18" ).appendChild( weaponButton18 );

    var weaponButton19=document.createTextNode(weapon_sheet19)
    document.getElementById( "weapon19" ).appendChild( weaponButton19 );

    var weaponButton20=document.createTextNode(weapon_sheet20)
    document.getElementById( "weapon20" ).appendChild( weaponButton20 );

    var weaponButton21=document.createTextNode(weapon_sheet21)
    document.getElementById( "weapon21" ).appendChild( weaponButton21 );

    var weaponButton22=document.createTextNode(weapon_sheet22)
    document.getElementById( "weapon22" ).appendChild( weaponButton22 );

    var weaponButton23=document.createTextNode(weapon_sheet23)
    document.getElementById( "weapon23" ).appendChild( weaponButton23 );

}
