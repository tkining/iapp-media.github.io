﻿<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="p02.aspx.vb" Inherits="AppWeb1._4.p021" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
   <style>
       #text {
           position:absolute;
           bottom:40px;
           left:10px;
       }
   </style>
    <script src="../js/jquery-2.1.4.min.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body style="margin:0; background-color:white;">
    <form id="form1" runat="server">
        <div id="p02" style="width: 261px; height:464px; margin:0;padding:inherit">
            <asp:Image Style="width: 261px; height:464px" ID="Image1" ImageUrl="~/img/basic/p02-0b.jpg" runat="server" />
        </div>
        <div id="text">
            <asp:Label ID="Label1" runat="server" Text="請點選輸入文字"></asp:Label>
         </div>
    </form>
    
</body>   
</html>
