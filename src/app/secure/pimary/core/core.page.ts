import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Pusher from 'pusher-js';
import { CoreService } from 'src/app/services/core services/core.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface MessageData {
  col: string;
  message: string;
  // Add more properties if needed based on the actual structure of your data
}

@Component({
  selector: 'app-core',
  templateUrl: './core.page.html',
  styleUrls: ['./core.page.scss'],
})
export class CorePage implements OnInit {
  secretData = null;
  message = '';
  coly='';alertButtons = ['Action'];
  messages: MessageData[] = [];
  order!: FormGroup;


  constructor(
    private apiService: AuthService,
    private coreService: CoreService,private formBuilder: FormBuilder
   
    ) {}

  ngOnInit(): void {
    this.order = this.formBuilder.group({
      automat_id: ['', Validators.required],
      
    });
    Pusher.logToConsole = true;

    const pusher = new Pusher('b1a8f4d274c455dccebb', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data: MessageData) => {
      this.messages.push(data);
      this.coly=data.col
      this.message=data.message
    });
  }

  async getData() {
    this.secretData = null;

    this.apiService.user().subscribe((res: any) => {
      this.secretData = res.email;
     // this.message = '';
    });
  }

  logout() {
    this.apiService.logout();
  }





  submitForm() {
   this.coreService.testorder(this.order.value);
   console.log(this.order.value);
   
    
  }







}
