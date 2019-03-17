export interface IDropboxListResponse {
  readonly entries: [{
    '.tag': 'file' | 'folder';
    name: string;
    path_lower: string;
    path_display: string;
    id: string;
    client_modified: string;
    server_modified: string;
    rev: string;
    size: number;
    content_hash: string;
  }];
  readonly cursor: string;
  readonly has_more: boolean;
}
