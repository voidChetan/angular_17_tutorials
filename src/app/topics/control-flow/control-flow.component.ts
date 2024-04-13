import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  playerlist: any []= [
    {  playerId:111,  playerName: "Sachin Tendulkar", city:'Mumbai', gender: 'M', isActive: false},
    {  playerId:112,  playerName: "Rohit Sharma", city:'Mumbai', gender: 'M', isActive: false},
    {  playerId:113,  playerName: "Saina Nehwal", city:'Jaipur', gender: 'F', isActive: true},
    {  playerId:114,  playerName: "Virat Kohli", city:'Pune', gender: 'M', isActive: true},
    {  playerId:115,  playerName: "Rahul Dravid", city:'Bhopal', gender: 'M', isActive: false}
  ]
  studentList: any [] = [];

  cityList: string[] = ["Pune","Nagpur","Mumbai","Thane","Solapur"];

  isDiv1Visible: boolean =  true;
  idDiv2Visible: boolean = false;
  isDiv2Active: boolean = false;

  num1: string = '';
  num2: string = '';
  dayIndex: string = '0';
}
