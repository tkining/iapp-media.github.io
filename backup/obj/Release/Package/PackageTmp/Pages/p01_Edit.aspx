﻿<%@ Page Language="vb" AutoEventWireup="false" Debug="true" CodeBehind="p01_Edit.aspx.vb" Inherits="AppWeb1._4.p01_Edit" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <style>
        #finish {
            height: auto;
            width: auto;
            position: relative;
            color:pink;
            left:0;
            top: 0;
        }
    </style>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div style="width:100%;text-align:center;">
            <asp:FileUpload ID="FU" runat="server" Height="23px" Width="161px" />
            <asp:Label ID="Msg" runat="server"></asp:Label>
            <div>
            <asp:Image ID="Image1" runat="server" Height="400px" Width="300px" />
             </div>
            <div>
                <asp:ImageButton ID="finish" ImageUrl="~/img/finish.png" runat="server" />
            </div>
        </div>
    </form>
</body>
</html>
