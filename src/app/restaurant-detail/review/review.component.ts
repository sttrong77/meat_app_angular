import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'

import { RestaurantsService } from '../../restaurants/restaurants.service'

import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html',
})
export class ReviewComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantsSevice: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsSevice
                       .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
