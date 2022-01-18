import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Random-Generator';
  newMemberName = '';
  members: string[] = [];
  errorMsg = '';
  numberOfTeams: number | '' = '';
  teams: string [][] = [];

  onInput(member: string){
    this.newMemberName = member;
  }

  onTeamNumberInput(value: string){
    this.numberOfTeams = Number (value);
  }


  onClick(){
    if(!this.newMemberName){
      this.errorMsg = 'Input field can\'t be empty'
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    this.errorMsg = '';
  }

  onGenerate(){
    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMsg = 'Invalid Type of Teams';
      return;
    }

    if(this.numberOfTeams > this.members.length){
      this.errorMsg = 'Teams can not be greater that members';
      return;
    }

    this.errorMsg = '';

    const allMember = [...this.members];

    while(allMember.length){
      for(let i = 0; i < this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMember.length);
        const member = allMember.splice(randomIndex, 1)[0];

        if(!member)break;

        if(this.teams[i]){
          this.teams[i].push(member);
        }else{
          this.teams[i] = [member];
        }
      }
    }
    this.members = [];
    this.numberOfTeams = '';
  }

}
