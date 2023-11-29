import { TestBed } from '@angular/core/testing';

import { ProjectAPIInterceptor } from './project-api.interceptor';

describe('ProjectAPIInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ProjectAPIInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ProjectAPIInterceptor = TestBed.inject(ProjectAPIInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
