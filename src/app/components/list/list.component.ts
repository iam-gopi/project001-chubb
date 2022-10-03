import { Component, OnInit } from '@angular/core';
import { ApiConsumerService } from 'src/app/services/api-consumer.service';
import { User } from 'src/app/Utilities/User';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users: User[] = [];

  constructor(private service: ApiConsumerService) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.service.getAllUserDetail().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  deleteBtnClickHandler(id: number, name: String) {
    if (confirm(`Are you sure to delete ${name} record`)) {
      this.service.deleteAUser(id).subscribe((data: User) => {
        if (data) {
          console.log(data);
          if (this.users.length > 0) {
            this.users = this.users.filter((x) => x.name !== name);
          } else {
            this.getAllUser();
          }

          alert(`${name} record deleted successfully`);
        }
      });
    }
  }
}
