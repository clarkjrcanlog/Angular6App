import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray, FormControl } from '@angular/forms'; //imports formGroup and formControl
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
  simpleForm : FormGroup;
  output: any;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.simpleForm = this.fb.group({
      simpleText: ''
    })

    this.simpleForm.get('simpleText').valueChanges.subscribe(input =>{

      let outputArr;
      (input) ?
                (
                (
                this.output = '',
                outputArr = [],

                input = parseFloat(input)
                ),

                (typeof input === "number" && input !== 100) ? ( (outputArr.push(`${input} is a ${typeof input}`), outputArr.push(`${input} divided by 2 is ${input/2}`)),
                (input/2 > 10) ? outputArr.push(`${input} divided by 2 is greater than 10`)
                : (outputArr.push(`${input} divided by 2 is less than 10`), input/2 > 0 || outputArr.push(`${input/2} less than 0`)) )          //true
                 : (input === 100) ? (outputArr = [], outputArr.push(`<font color="green" style="font-size:${input}px">${input}</font>`)) : false //else


                ,this.output = outputArr.join('<br/>')

                )
                :

                this.output = "";
    })
  }



}
