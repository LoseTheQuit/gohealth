import { Component, OnInit } from "@angular/core";
import { NgForm, FormControl, FormGroup, Validators } from "@angular/forms";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-patient",
  templateUrl: "./patient.component.html",
  styleUrls: ["./patient.component.css"]
})
export class PatientComponent implements OnInit {
  constructor(private dataService: DataService) {}

  firstName: string;
  lastName: string;
  dob: string;
  phone: number;
  insuranceCarriers: string[];
  selectedCarrier: string;
  insuranceID: string;
  copay: number;
  patientInfo: PatientInfo;
  hasInsurance: boolean = false;
  validInsurance: boolean = false;
  testPatients: any[];

  ngOnInit() {
    this.firstName;
    this.lastName;
    this.dob;
    this.phone;
    this.copay;
    this.selectedCarrier;
    this.insuranceID;

    this.insuranceCarriers = [
      "aetna",
      "empire_blue_cross_blue_shield",
      "united_health_care",
      "cigna"
    ];

    this.testPatients = [
      { name: "Marsha Mellow" },
      { name: "Rita Book" },
      { name: "Isabelle Ringing" },
      { name: "Willie Makit" },
      { name: "Earl E. Bird" }
    ];
  }

  insuranceCheck(bool) {
    if (bool) {
      this.hasInsurance = true;
    } else {
      this.hasInsurance = false;
    }
  }

  onSubmit(f: NgForm) {
    console.log(f.value);

    this.firstName = f.value.firstName;
    this.lastName = f.value.lastName;
    this.dob = f.value.dob;
    this.phone = f.value.phone;
    this.insuranceID = f.value.insuranceID;
    this.selectedCarrier = f.value.selectedCarrier;

    this.patientInfo = {
      member: {
        first_name: f.value.firstName,
        last_name: f.value.lastName,
        id: f.value.firstName.insuranceID,
        birth_date: f.value.dob
      },
      provider: {
        first_name: "Marty",
        last_name: "Seeger",
        npi: "1234567890"
      },
      trading_partner_id: f.value.selectedCarrier
    };

    this.dataService
      .insuranceEligibilityAPI(this.patientInfo)
      .subscribe(res => {
        if (res.statusCode !== 200) {
          this.validInsurance = false;
          console.log("There has been an error!");
          this.copay = null;
        } else {
          this.validInsurance = true;
          let api = JSON.parse(res.body);
          this.copay = api.data.coverage.copay[0].copayment.amount;
          console.log(api.data);
        }
      });
  }

  fireTestPatientChange(patient) {
    console.log(`\n ${patient} \n`);
    switch (patient) {
      case "Marsha Mellow":
        this.firstName = "Marsha";
        this.lastName = "Mellow";
        this.dob = "1980-01-20";
        this.phone = 2815551212;
        this.insuranceID = "W213967732";
        this.selectedCarrier = "aetna";
        this.hasInsurance = true;
        break;
      case "Rita Book":
        this.firstName = "Rita";
        this.lastName = "Book";
        this.dob = "1991-10-31";
        this.phone = 7135554321;
        this.insuranceID = "345123987";
        this.selectedCarrier = "united_health_care";
        this.hasInsurance = true;
        break;
      case "Isabelle Ringing":
        this.firstName = "Isabelle";
        this.lastName = "Ringing";
        this.dob = "1976-07-06";
        this.phone = 8325845522;
        this.insuranceID = "YGG456123";
        this.selectedCarrier = "empire_blue_cross_blue_shield";
        this.hasInsurance = true;
        break;
      case "Willie Makit":
        this.firstName = "Willie";
        this.lastName = "Makit";
        this.dob = "1983-12-13";
        this.phone = 2127845555;
        this.insuranceID = "G987665";
        this.selectedCarrier = "cigna";
        this.hasInsurance = true;
        break;
      case "Earl E. Bird":
        this.firstName = "Earl";
        this.lastName = "Bird";
        this.dob = "1957-11-19";
        this.phone = 4048554242;
        this.insuranceID = "";
        this.selectedCarrier = "";
        this.hasInsurance = true;
        break;
    }
  }

  redirect() {}
}

interface PatientInfo {
  member: {
    first_name: string;
    last_name: string;
    id: string;
    birth_date: string;
  };
  provider: {
    first_name: string;
    last_name: string;
    npi: string;
  };
  trading_partner_id: string;
}
