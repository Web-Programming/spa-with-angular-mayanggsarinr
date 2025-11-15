import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LokasiPerumahan } from '../lokasi-perumahan/lokasi-perumahan';
import { CommonModule } from '@angular/common';
import { Housing } from '../lokasi-perumahan/housing-model';

@Component({
  selector: 'app-home',
  imports: [LokasiPerumahan, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit {

  // Data housing
  housingList: Housing[] = [
    {
      id: 1,
      title: 'Griya Asri Residence',
      location: 'Jakarta Selatan',
      price: 850000000,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop',
      rating: 4.5,
      status: 'Available',
      type: 'rumah',
      description: 'Hunian modern dengan desain minimalis di kawasan Jakarta Selatan yang strategis.',
      postedDays: 2
    },
    {
      id: 2,
      title: 'Citra Harmoni Residence',
      location: 'Bekasi',
      price: 720000000,
      bedrooms: 3,
      bathrooms: 2,
      area: 95,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
      rating: 4.7,
      status: 'Available',
      type: 'rumah',
      description: 'Hunian nyaman di kawasan Bekasi dengan akses mudah ke fasilitas umum.',
      postedDays: 4
    },
    {
      id: 3,
      title: 'Bukit Indah Residence',
      location: 'Bogor Barat',
      price: 1350000000,
      bedrooms: 4,
      bathrooms: 3,
      area: 190,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
      rating: 4.9,
      status: 'Available',
      type: 'villa',
      description: 'Villa premium dengan udara sejuk dan pemandangan alam hijau.',
      postedDays: 2
    },
    {
      id: 4,
      title: 'Central Park Apartment',
      location: 'Jakarta Pusat',
      price: 820000000,
      bedrooms: 2,
      bathrooms: 2,
      area: 88,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
      rating: 4.6,
      status: 'Pending',
      type: 'apartemen',
      description: 'Apartemen modern dengan fasilitas kolam renang, gym, dan keamanan 24 jam.',
      postedDays: 3
    },
    {
      id: 5,
      title: 'Nusa Hijau Residence',
      location: 'Depok',
      price: 600000000,
      bedrooms: 3,
      bathrooms: 2,
      area: 105,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
      rating: 4.4,
      status: 'Available',
      type: 'rumah',
      description: 'Cluster ramah lingkungan dengan konsep hijau dan suasana tenang.',
      postedDays: 6
    },
  ];

  filteredList: Housing[] = [];
  selectedFilter: string = 'all';

  ngOnInit() {
    this.filteredList = [...this.housingList];
  }

  filterByType(type: string) {
    this.selectedFilter = type;
    if (type === 'all') {
      this.filteredList = [...this.housingList];
    } else {
      this.filteredList = this.housingList.filter(h => h.type === type);
    }
  }

  isFilterActive(type: string): boolean {
    return this.selectedFilter === type;
  }

}
