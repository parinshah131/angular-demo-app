import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { PostService } from '../post.service';
import { HttpTestingController } from '@angular/common/http/testing';

describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();  // Ensure no unmatched requests remain
  });

  it('should fetch posts successfully', () => {
    const mockPosts = [
      { id: 1, title: 'Post 1', body: 'Content 1' },
      { id: 2, title: 'Post 2', body: 'Content 2' }
    ];

    service.getPosts().subscribe((posts: any) => {
        debugger;
      expect(posts.length).toBe(2);
      expect(posts).toEqual(mockPosts);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');

    req.flush(mockPosts);  // Mock API response
  });

  it('should handle errors when fetching posts', () => {
    service.getPosts().subscribe({
      next: () => fail('Should have failed with 500 error'),
      error: (error) => {
        expect(error.status).toBe(500);
      }
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');

    req.flush('Internal Server Error', { status: 500, statusText: 'Server Error' });
  });
});
