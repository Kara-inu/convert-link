import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { httpRequestService } from '../../service/httpRequest.service'
import { GlobalVariable} from "../../config"
@Component({
  selector: 'app-list-url',
  templateUrl: './list-url.component.html',
  styleUrls: ['./list-url.component.scss']
})
export class ListURLComponent implements OnInit {
  formLink: FormGroup;
  listLink = [];
 
  part = GlobalVariable.BASE_API_INFO
  constructor(
    private formBuilder: FormBuilder,
    private request: httpRequestService
  ) {
    this.formLink = this.formBuilder.group({
      full: this.formBuilder.control('', [Validators.required, Validators.pattern('([\\da-z.-/]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
      short: this.formBuilder.control('', [Validators.required, Validators.pattern('([\\da-z.-/]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    });

  }
  async ngOnInit() {
    await this.getData();
  }
  get fl() {
    return this.formLink.controls;
  }

  async getData() {
    this.request.getRequest(this.part)
      .subscribe(arg => {
        console.log("arg", arg)
        this.listLink = [...arg]
      })
  }
  onDelete(id) {
    console.log("onDelete", id)
    this.request.deleteRequest(this.part + '/' + id).subscribe((res) => {
      this.getData()
    })
  }

}
