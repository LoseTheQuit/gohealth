import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: any[];
  answers: any[];
  posts: Posts[];
  isEdit: boolean = false;
  counter: number;
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
    this.counter = 0;
    this.hobbies = [];
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

  calcCollatz(answer) {
    // alert(answer);
    console.log(this.answers);
    this.answers.push(answer);
  }

  addHobby(hobby) {
    // console.log(hobby);
    let newAns;
    this.hobbies.push(hobby);
    let arrayL = 1;
    while (this.hobbies[arrayL - 1] > 1) {
      arrayL = this.hobbies.length;

      console.log(this.hobbies[arrayL - 1]);

      if (this.hobbies[arrayL - 1] % 2 === 0) {
        console.log("even");
        // console.log(hobby);
        newAns = this.hobbies[arrayL - 1] / 2;
        this.hobbies.push(newAns);
      } else {
        console.log("odd");
        // console.log(hobby);
        newAns = 3 * this.hobbies[arrayL - 1] + 1;
        console.log(newAns);
        this.hobbies.push(newAns);
      }

      console.log(this.hobbies);
      // return false;
      if (this.hobbies[arrayL - 1] <= 1) {
        // return false;
      }
    }

    // alert(hobby);
    // this.hobbies.unshift(hobby);
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
