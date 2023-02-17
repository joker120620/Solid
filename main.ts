//Single responsibility principle
class login {
  user: string
  password: string
  constructor(user, password) {
    this.user = user;
    this.password = password;
  }
  conectar() {
    console.log(`usuario: ${this.user} logueado`);
  }
}
class sendMessage {
  mensaje: string
  destinatario: string
  constructor(mensaje: string, destinatario: string) {
    this.mensaje = mensaje;
    this.destinatario = destinatario;
  }
  sendMsj() {
    console.log(`enviar Msj: ${this.mensaje} para  ${this.destinatario}`)
  }
}

///Open/closed 
interface Engine {
  start(): void;
}

class Vehicle {
  engine: Engine;

  startEngine() {
    this.engine.start();
  }
}

class CarEngine implements Engine {
  start() {

  }
}

class MotorcycleEngine implements Engine {
  start() {}
}



//interface/segregacion
interface Swimmable {
  swim(): void;
}

interface Flyable {
  fly(): void;
}

interface Walkable {
  walk(): void;
}

class Dog implements Swimmable, Walkable {
  swim() {}

  walk() {}
}


///loskiv
class Rectangle {
  public setWidth(width) {
    this.width = width;
  }
  public setHeight(height) {
    this.height = height;
  }
  public getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {

  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

let rectangle = new Rectangle();
rectangle.setWidth(100);
rectangle.setHeight(50);
console.log(rectangle.getArea());


//inversión de dependencias 
interface Sender {
  send(recipient: string, subject: string, message: string): void;
}

class EmailSender implements Sender {
  public send(recipient: string, subject: string, message: string): void {
  }
}

class NotificationService {
  private sender: Sender;

  constructor(sender: Sender) {
    this.sender = sender;
  }

  public sendNotification(user: { email: string }, message: string): void {
    this.sender.send(user.email, 'Nuevo email', message);
  }
}

const emailSender: Sender = new EmailSender();
const notificationService: NotificationService = new NotificationService(emailSender);

notificationService.sendNotification({ email: 'ejemplo@gmail.com' }, '¡Tienes un nuevo email!');