import { TestBed } from '@angular/core/testing';

import { NgxHadeethencApiService } from './ngx-hadeethenc-api.service';
import { provideHttpClient } from '@angular/common/http';

describe('NgxHadeethencApiService', () => {
  let service: NgxHadeethencApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(NgxHadeethencApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getLanguagesAsync should return real value', async () => {
    const languages = await service.getLanguagesAsync();
    expect(languages).toContain({
      code: 'ar',
      native: 'عربي',
    });
  });
});
