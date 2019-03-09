export interface IDropboxListResponse {
  readonly entries: [{
    '.tag': string;
    name: string;
    path_lower: string;
    path_display: string;
    id: string;
  }];
  readonly cursor: string;
  readonly has_more: boolean;
}
