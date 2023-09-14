<?php

$userUrl = "https://discordapp.com/api/users/@me";
$header = array("Authorization: Bearer ".$_COOKIE["token"] , "Content-Type: application/x-www-form-urlencoded");

$cl = curl_init();
curl_setopt($cl , CURLOPT_HTTPHEADER , $header);
curl_setopt($cl , CURLOPT_URL , $userUrl);
curl_setopt($cl , CURLOPT_POST , false);
curl_setopt($cl , CURLOPT_RETURNTRANSFER , true);
curl_setopt($cl , CURLOPT_SSL_VERIFYHOST , 0);
curl_setopt($cl , CURLOPT_SSL_VERIFYPEER , 0);

$result = curl_exec($cl);
$discordInfo = json_decode($result , true);

?>

<header>
    <h1>DISNS</h1>
    <nav>
        <?php if (isset($_COOKIE["token"])){?>
            <a href="userSet.php?action=logout" title="logout">logout</a>
        <?php }else {?>
            <a href="userSet.php?action=login" title="login">login</a>
        <?php }?>
    </nav>
    <?php if (isset($_COOKIE["token"])){?>
        <a href="" title="profile"><img src="https://cdn.discordapp.com/avatars/<?= $discordInfo["id"] ?>/<?= $discordInfo["avatar"] ?>.png"/></a>
    <?php }else {?>
        <a href="" title="로그인해주세요"><img src="https://w.namu.la/s/ab0b5f8f79c22ba3750c7fca82c56b32dbb099532a06790df90c17494544797abbf4b9fa2ec1979c58dcf246e7bb6e27f5c0560d15be9c351eb97408dfbb1557078c93ace2c6e8731a5cdde24b405d0d24f6559fc5952cd78d7b3163ab394c46"/></a>
    <?php }?>


</header>
<div style="margin-bottom: 75px;"></div>

<style>

    *{
        margin: 0;
        --backgroundColor:rgb(231, 231, 231);
        --perple: rgb(132, 0, 255);
    }

    header{
        position: fixed;
        display: flex;
        z-index: 999999;
        
        height: 75px;
        width: 100%;
        background-color: var(--perple);
        align-items: center;
        box-shadow: 0px -3px 10px 0px black;
    }

    header > h1{
        color: white;
        margin-left: 100px;
        font-size: 40px;
    }

    header > nav > a{
        padding-left: 50px;
        color: white;
        text-decoration: none;
        /* margin-top: 10px; */
    }

    header > a{
        margin-left: auto;
        margin-right: 100px;
    }
    
    header > a > img{
        border-radius: 100%;
        width: 50px;
    }

    header > a > img::after{
        content: 'aaa';
        position: absolute;
        width: 300px;
        height: 700px;
        background-color: rgb(132, 0, 255);
    }

    header > a > img:hover::after{
        content: 'aaa';
        position: absolute;
        width: 300px;
        height: 700px;
        background-color: rgb(132, 0, 255);
    }

</style>