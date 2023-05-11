import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { httpRequestService } from '../../service/httpRequest.service';
import { GlobalVariable} from "../../config"

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {
  part = ''
  constructor(
    private route: ActivatedRoute,
    private request: httpRequestService) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      this.part = GlobalVariable.BASE_API_INFO + GlobalVariable.BASE_REDIREC + params['id']
      await this.getData(params['id']) 
    });
  }
  async getData(id) {
    this.request.getRequest(this.part)
      .subscribe(arg => {
        if(arg[0]){
          let url = arg[0].full
          window.location.href = url
        }
      })
  }
}
