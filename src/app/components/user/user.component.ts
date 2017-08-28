import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: any[];
  posts: Posts[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {
    console.log(`UserComponent initialized!`);
  }

  ngOnInit() {
    this.name = `Brendan Carr`;
    this.age = 30;
    this.email = "losethequit@gmail.com";
    this.address = {
      street: "483 Yates Rd.",
      city: "Atlanta",
      state: "GA"
    };
    this.hobbies = ["write code", "watch game of thrones", "listen to music"];
    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  }

  onClick() {
    console.log("hobby");
    this.name = "Cooper Redding";
    this.hobbies.push("new hobby");
    return false;
  }

  addHobby(hobby) {
    console.log(hobby);
    alert(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

// a modal for an object
interface Address {
  street: string;
  city: string;
  state: string;
}
interface Posts {
  id: number;
  title: string;
  body: string;
  userId: number;
}
