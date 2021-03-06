﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="AppPortal.Login" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>login</title>
    <link rel="stylesheet" href="css/login.css" />
    <link href="img/favicon.ico" rel="shortcut icon" />
</head>
<body>
     <div id="fb-root"></div>
    <script>
    </script>
    <form id="form1" runat="server">
        
        <div class="content">
            <div class="middle-bar"></div>
            <div class="logo"></div>
            <div style="position: absolute; top: 5%; left: 5%; width: 40%; height: 10%;">
                <p style="text-align: end; font-size: large; font-weight: bold;color: #ff9933;">登入／註冊</p>
                <div class="bar"></div>
            </div>
            <!-- 登入input位置 -->
            <div class="input" >
                <div style="margin:10px;">
                <span style="text-align:right;margin-left:15px;margin-top:0px;margin-right:15px;color:#7b7b7b;">帳號</span> 
                <br/>
                    <asp:TextBox ID="accBox" placeholder="請輸入您註冊的Email" style="margin-left:15px;margin-top:10px;margin-right:15px;width:220px;height:20px;color:#7b7b7b;" runat="server" CssClass="tb5"></asp:TextBox>
                </div>
                <div style="margin-top:15px;margin-left:10px ">
                <span style=" text-align:right; margin-left:15px;margin-top:0px;margin-right:15px;color:#7b7b7b;">密碼</span>
                <br/>
                <asp:TextBox ID="pwBox" runat="server" CssClass="tb5" TextMode="Password" style="margin-left:15px;margin-top:10px;margin-right:15px;width:220px;height:20px;color:#7b7b7b;"></asp:TextBox>
                </div>
            </div>

            <div style="position: absolute; top: 5%; left: 55%; width: 40%; height: 10%;">
                <p style="text-align: end; font-size: large; font-weight: bold;color: #ff9933;">Facebook登入</p>
                <div class="bar"></div>
            </div>
            <!-- facebook登入input位置 -->
            <div class="input-fb">
                <div class="facebook"><p><a href="#" onclick="startup()">facebook登入</a></p></div>
            </div>
            <div style="position: absolute; top: 52%; left: 5%; width: 40%; height: 8%;">


              <%--  <asp:ImageButton ID="ImageButton1" ImageUrl="img/login.png" runat="server" Style="height: 100%; width: auto;" />--%>
                
                <div class="login"><p>
                    <asp:LinkButton ID="LoginBtn" runat="server" OnClick="LoginBtn_Click">登入</asp:LinkButton></p></div>
                <div class="register"><p><a href="Register.aspx">註冊</a></p></div>
                
                <!-- <img src="img/login.png" height="100%" width="auto" onMouseOut="this.src='img/login.png'" onMouseOver="this.src='img/login-1.png'">
                <a href="Register.aspx">
                    <img src="img/register.png" height="100%" width="auto" onmouseout="this.src='img/register.png'" onmouseover="this.src='img/register-1.png'"></a> -->

                <!-- <div class="login" src="img/button.png" onMouseOut="this.src='img/button.png'" onMouseOver="this.src='img/button-2.png'"></div> -->
                <!-- <a href="signup.html"><div class="register"></div></a> -->
            </div>
        </div>
        <div class="content2 hide">
        </div>




    </form>
	</body>

</html>

