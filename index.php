<?php
namespace myPhpnote{
    const CONNECT_OK = 1;
    class Connection { /* ... */ }
    function connect() { /* ... */  }
}
namespace { // 全局代码
session_start();
$a = MyProject\connect();
echo MyProject\Connection::start();
}
//1、输出变量print_r();数组、变量（在屏幕上）
//var_dump();数组报错输出Array
//echo""; 数组报错输出Array
//die();数组报错输出Array
//        $arr2 = array(1, 2, 3);   
//        $arr2 = "111";
//        print_r($arr2)."<br>";
//        print($arr2)."<br>";
//        var_dump($arr2)."<br>";
//        echo "$arr2"."<br>";
//        echo $arr2."<br>";
//        die($arr2);
//2、二维数组
$arr = array(
    array(99, 11, 33),
    array("11", "22", "33")
);
//多维数组
$arr1 = array(
    "name" => array(
        "1",
        "2"
    ),
    "age" => array(
        "22",
        "23"
    )
);

//        print("<pre>");
//        print_r($arr1);
//        print("</pre>");
//        echo $arr1['name'][0];
//3、日期date() 年：Y 月：m 日：d   格式：/ - .  更多格式php官网
//        echo date("Y/m/d")."<br>";
//        echo date("Y-m-d")."<br>";
//        echo date("Y.m.d")."<br>";
//        echo date("Y-m-d-D")
//4、require 和 include
//        require("./header.php");
//        include("./header.php");
//EOF
//
class Car {

    public $color;
    protected $color2 = 2;
    private $color3 = 2;
    static $SUCCESS = 0x0;

    function __construct($color = "green") {
        echo '构造函数被调用';
    }

    function whatColor() {
        return $this->color;
    }

    public function __destruct() {
        echo '构希函数被调用';
    }

}

class Site { 
  /* 成员变量 */ 
  var $url; 
  var $title; 
   
  /* 成员函数 */ 
  function setUrl($par){ 
     $this->url = $par; 
  } 
   
  function getUrl(){ 
     echo $this->url . PHP_EOL; 
  } 
   
  function setTitle($par){ 
     $this->title = $par; 
  } 
   
  function getTitle(){ 
     echo $this->title . PHP_EOL; 
  } 
} 
$runoob = new Site; 
$taobao = new Site; 
$google = new Site; 

// 调用成员函数，设置标题和URL 
$runoob->setTitle( "菜鸟教程" ); 
$taobao->setTitle( "淘宝" ); 
$google->setTitle( "Google 搜索" ); 

$runoob->setUrl( 'www.runoob.com' ); 
$taobao->setUrl( 'www.taobao.com' ); 
$google->setUrl( 'www.google.com' ); 

// 调用成员函数，获取标题和URL 
$runoob->getTitle(); 
$taobao->getTitle(); 
$google->getTitle(); 

$runoob->getUrl(); 
$taobao->getUrl(); 
$google->getUrl(); 


//
//echo strlen("Hello world!");
//echo bin2hex('你');
//echo "\xe4\xbd\xa0";
//echo strlen("Hello world!你");
//echo mb_strlen("Hello world!你");
//echo "<pre>";
//var_dump($_SERVER);
//echo "</pre>";
//echo __DIR__ ;//文件所在的绝对路径
//命名空间


