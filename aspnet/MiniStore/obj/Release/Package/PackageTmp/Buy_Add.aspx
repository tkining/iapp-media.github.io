﻿<%@ Page Title="" Language="C#" MasterPageFile="~/BuyFont.Master" AutoEventWireup="true" CodeBehind="Buy_Add.aspx.cs" Inherits="MiniStore.Buy_Add" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/jquery-2.1.4.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
 
    <ul class="buydivmove"> 
        <li class="productcare col-xs-12">
            <div class="col-xs-12  ">
                <div class="row">
                    <div class="col-xs-12 libor productsinside">
                       
                          <div  class="col-xs-6">
                                    <!-- 輪播圖 -->
                                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                                        <!-- Wrapper for slides -->
                                        <div class="carousel-inner" role="listbox">
                                            <asp:Literal ID="L" runat="server"></asp:Literal>
                                        </div>
                                        <!-- Controls -->
                                        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div> 
                                </div>
                        
                        <h1 class="col-xs-6" >
                            <asp:Literal ID="L_Name" runat="server"></asp:Literal></h1> 
                        <p class="col-xs-6" ><asp:Literal ID="L_Description" runat="server"></asp:Literal></p>
                        <span class="col-xs-6"><asp:Literal ID="L_Price" runat="server"></asp:Literal></span>
                    </div>
                    <div class="col-xs-12 libor paynumber">
                        <label for="" class="col-xs-6">購買數量</label>
                        <asp:DropDownList ID="DL_qty" runat="server" CssClass="form-control" >
                            <asp:ListItem Value="1">1</asp:ListItem>
                              <asp:ListItem Value="2">2</asp:ListItem>
                              <asp:ListItem Value="3">3</asp:ListItem>
                              <asp:ListItem Value="4">4</asp:ListItem>
                              <asp:ListItem Value="5">5</asp:ListItem>
                              <asp:ListItem Value="6">6</asp:ListItem>
                        </asp:DropDownList> 
                    </div>
                    <div class="col-xs-12 libor status">
                        <label for="" class="col-xs-6">商品規格</label>
                        <asp:TextBox ID="TB_Dimension" runat="server" CssClass="col-xs-6"></asp:TextBox> 
                    </div>
                    <div class="col-xs-12 libor productNum">
                        <label for="" class="col-xs-6">商品售價</label>
                        <asp:TextBox ID="TB_Price" runat="server" CssClass="col-xs-6"></asp:TextBox>  
                    </div>
                    <div class="col-xs-12 libor payNum">
                        <label for="" class="col-xs-6">付款金額</label>
                        <asp:TextBox ID="TB_Paysum" runat="server"></asp:TextBox>
                    </div>
                    <div class="col-xs-12 libor paytheway">
                        <label for="" class="col-xs-6">付款方式</label>
                             <asp:DropDownList ID="DL_Payment" runat="server" CssClass="form-control">
                                <asp:ListItem Text="面交" Value="1"></asp:ListItem>
                                <asp:ListItem Text="7-11 ibon" Value="2"></asp:ListItem>
                                <asp:ListItem Text="銀行轉帳" Value="3"></asp:ListItem>
                            </asp:DropDownList>
                    </div>
                    <div class="col-xs-12 libor sendtheway">
                        <label for="" class="col-xs-6">寄送方式</label>
                            <asp:DropDownList ID="DL_Delivery" runat="server" CssClass="form-control">
                                <asp:ListItem Text="面交自取" Value="1"></asp:ListItem>
                                <asp:ListItem Text="7-11" Value="2"></asp:ListItem>
                                <asp:ListItem Text="寄送到府" Value="3"></asp:ListItem>
                            </asp:DropDownList>
                    </div>
                    <div class="col-xs-12 libor sendadress">
                        <label for="" class="col-xs-5">收件人資訊</label>
                        <div class="col-xs-7">
                            <asp:TextBox ID="TextBox1" runat="server" placeholder="電話" CssClass="col-xs-12" ></asp:TextBox>
                            <asp:TextBox ID="TextBox2" runat="server" placeholder="郵遞區號" CssClass="col-xs-12" ></asp:TextBox>
                            <asp:TextBox ID="TextBox3" runat="server" placeholder="地址" CssClass="form-control" Rows="3"></asp:TextBox>
                         </div>
                    </div>
                </div>
            </div>
            <asp:Button ID="BT_Confirm" runat="server" Text="確認購物內容" CssClass="btn btn-warning col-xs-12 sendcareButtom" /> 
        </li>
        </ul>
    <script>
        function myScriptFunctionName() {
            alert('GGG');
        }
    </script>
</asp:Content>
 