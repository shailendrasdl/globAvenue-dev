import { Component, OnInit } from '@angular/core';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})

export class ModalContainerComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  public user = {
    name: 'Izzat Nadiri',
    age: 26
    }

    openModal() {
      const modalRef = this.modalService.open(ModalContentComponent);
      modalRef.componentInstance.user = this.user;
      }
}
