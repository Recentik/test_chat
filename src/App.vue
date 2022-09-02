<template>
 <div class="vhod" v-if="state.username === '' || state.username === null">
    <div class="void-button">
      <form class="login-form" @submit.prevent="Login">
        <input class="login_blok" type="text" size="100" maxlength="100"   placeholder="User3" required 
        v-model="inputUsername" >
        <button class="send" type="submit"><img src="https://sun9-49.userapi.com/impg/ZZSZ1Lz86B1bLToNjstdM35FVLUUTJt2ZPcOow/IlY4VuqpODE.jpg?size=43x42&quality=96&sign=c7fea1817c1637bcb879b762f1b241ef&type=album" alt="Arrow Icon"></button>
      </form>
    </div>
 </div>
  
 
 <div class="view chat" v-else>
   
    
   

   
  </div>
  
  <div class="main">
  <div class="window">
    <div class="void-top">
      <header>
      <h1> {{ state.username }}</h1>
    </header> </div>
    <div class="chat">
      
      <div 
        v-for="message in state.messages" 
        :key="message.key" 
        :class="(message.username == state.username ? 'message current-user' : 'message')">
        <div class="message-inner">
          <div class="username">{{ message.username }}</div>
          <div class="content">{{ message.content }}</div>
        </div>
      </div>

      <div class="user">
        <p class="user_name">User</p>
        <div class="user_messange">
          <p class="user_say">Привет
          </p>
        <button class="delete" type="submit"><img src="https://sun9-5.userapi.com/impg/LKAwzyOLLdc1H12PYkHg2PzlA9lneCKnJImSmA/xDuqd99Cl-I.jpg?size=21x22&quality=96&sign=5287e8b49ec417a6592164a19cc8ae76&type=album" alt="delete"></button>
          <p class="time">Время</p>
        </div>
      </div>
      <div class="user">

        <p class="user_name">User</p>
        <div class="user_messange">
          <p class="user_say" >
            <input class="text-messange"  style="padding:"
          type="text" 
          v-model="inputMessage" 
          placeholder="Привет." />
          </p>
        <button class="delete" type="submit"><img src="https://sun9-5.userapi.com/impg/LKAwzyOLLdc1H12PYkHg2PzlA9lneCKnJImSmA/xDuqd99Cl-I.jpg?size=21x22&quality=96&sign=5287e8b49ec417a6592164a19cc8ae76&type=album" alt="delete"></button>
          <p class="time">Время</p>
        </div>
      </div>

    </div>
    <div class="void-button">
      <form class="" action="#"  method="">
        <input class="messange" type="text"   v-model="inputMessage"  size="100" maxlength="100"  placeholder="Сообщение" required >
    <button class="send" type="submit" 
          value="Send" ><img src="https://sun9-49.userapi.com/impg/ZZSZ1Lz86B1bLToNjstdM35FVLUUTJt2ZPcOow/IlY4VuqpODE.jpg?size=43x42&quality=96&sign=c7fea1817c1637bcb879b762f1b241ef&type=album" alt="Arrow Icon"></button>
       <form @submit.prevent="SendMessage">
      
      </form>
         
      </form>
       
    </div>
  </div>
</div>


</template>

<script>
import { reactive, onMounted, ref } from 'vue';
import db from './db';

export default {
  setup () {
    const inputUsername = ref("");
    const inputMessage = ref("");

    const state = reactive({
      username: "",
      messages: []
    });

    const Login = () => {
      if (inputUsername.value != "" || inputUsername.value != null) {
        state.username = inputUsername.value;
        inputUsername.value = "";
      }
    }

    const Logout = () => {
      state.username = "";
    }

    const SendMessage = () => {
      const messagesRef = db.database().ref("messages");

      if (inputMessage.value === "" || inputMessage.value === null) {
        return;
      }

      const message = {
        username: state.username,
        content: inputMessage.value
      }

      messagesRef.push(message);
      inputMessage.value = "";
    }

    onMounted(() => {
      const messagesRef = db.database().ref("messages");

      messagesRef.on('value', snapshot => {
        const data = snapshot.val();
        let messages = [];

        Object.keys(data).forEach(key => {
          messages.push({
            id: key,
            username: data[key].username,
            content: data[key].content
          });
        });

        state.messages = messages;
      });
    });

    return {
      inputUsername,
      Login,
      state,
      inputMessage,
      SendMessage,

      Logout
    }
  }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
}
 ::-webkit-input-placeholder {color:#000000; opacity:1;}/* webkit */
  ::-moz-placeholder          {color:#000000; opacity:1;}/* Firefox 19+ */
  :-moz-placeholder           {color:#000000; opacity:1;}/* Firefox 18- */
  :-ms-input-placeholder      {color:#000000; opacity:1;}/* IE */
  .main{
    display: flex;
    justify-content: center;
    margin-top: 1.2em;
}
.window{
    position: absolute;
    
    width: 570px;
    background: #FFFFFF;
    border: 1px solid rgba(35, 44, 94, 0.21);
    box-shadow: 0px 6px 25px rgba(19, 35, 68, 0.1);
    border-radius: 8px;
    height: 628px;
    display: flex;
    flex-direction: column;
}

.chat{
    flex:1 1 auto;
    padding: 1rem 3rem;

}
.void-top{
width: 570px;
min-height: 31px;
top: 77px;
background: #F5F5F8;
border-radius: 7px 7px 0px 0px;
}
.vhod{
  display: flex;
  justify-content: center;
  height: 60em;
  align-items: center;
  background-color: white;
}
.void-button{
width: 570px;
display: flex;
justify-content: center;
align-items: center;
height: 125px;
left: 175px;
top: 579px;
background: rgba(11, 17, 69, 0.04);
}
.login_blok{
  box-sizing: border-box;
  width: 309.72px;
    height: 54px;
    left: 207px;
    top: 615px;
    background: #FFFFFF;
    border: 1px solid rgba(35, 44, 94, 0.21);
    border-radius: 8px;
}
.messange{
    box-sizing: border-box;
width: 506px;
height: 54px;
left: 207px;
top: 615px;
background: #FFFFFF;
border: 1px solid rgba(35, 44, 94, 0.21);
border-radius: 8px;
}
.send img{
    height: 1.3rem;
   align-items: center;
   display: flex;
   border-style: none;
}

form {
    position: relative;
    margin: 1em;
  }

  input {
    background: #F5F5F8;
    display: block;
    outline: none;
    line-height: 2rem;
    border: 1px #F5F5F8;
    padding: 0 1.8em;
    font-size: 16px;
    padding-right: 3rem;
    color:black;
  }
  
  .void-button button {
    position: absolute;
    top: 1.2em;
    right: 0.9em;
    border-style: none;
    text-transform: uppercase;
  }
  .user{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
width: 351px;
height: 77px;
left: 207px;
padding-top: 2rem;
top: 136px;
  }
  .user_messange{
    justify-content: space-between;
    display: flex;
    flex-direction: column;
width: 329px;
height: 52px;
left: 207px;
top: 161px;
background: #F5F5F8;
border-radius: 8px;
  }
  .user_say{
    font-size: 16px;
    padding: 1rem;
    position: absolute;

    line-height: 19px;
    color: #222222;
  }
  .time{
   display: flex;
   justify-content: flex-end;
font-size: 13px;
line-height: 15px;
padding: 2em 1em;
color: #969696;
  }
  .user_name{
    font-family: 'Roboto';
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    color: #5E5E5E;}
    .delete{
        left: 24rem;
        background: white;
        flex-direction: row-reverse;
        height: 1.3rem;
    align-items: center;
    display: flex;
    border-style: none;
    position: absolute;
    text-transform: uppercase;
    }
    .delete img{
        width: 1em;
        height: auto;
    }
</style>