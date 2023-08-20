import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-miels',
  templateUrl: './miels.component.html',
  styleUrls: ['./miels.component.css']
})
export class MielsComponent implements OnInit {
  id: string ='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
}


quantity:number=1;
i=1
plus(){
    this.i++;
    this.quantity=this.i;
  }
minus(){
  if (this.i>1){
      this.i--;
      this.quantity=this.i;
  }
}
}
