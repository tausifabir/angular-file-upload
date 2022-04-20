import {HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  SERVER_URL: string = "https://file.io/";
  resourceUrl: string = "http://localhost:8080/api/employee-mgt/employee-static-files/id-card";

  constructor(private httpClient: HttpClient) {
  }

  public upload(formData: FormData) {

    return this.httpClient.post<any>(this.SERVER_URL, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }


  public uploadImage(file: FileList): void {
    const formData: FormData = new FormData();


    formData.append('file', file[0]);
    /*const req = new HttpRequest('POST', this.resourceUrl, formData, {
      reportProgress: true,
      responseType: 'json',
    });*/

    this.httpClient.post(this.resourceUrl, formData)
      .subscribe(
        (res) => {
          console.log(res);
        }
      );
  }


  /*  @PostMapping("/employee-static-files/id-card")
    public ResponseEntity<Boolean> createEmployeeStaticFileIdCard(@RequestParam("file") MultipartFile[] files) throws URISyntaxException {

    log.debug("REST request to save id-card : {}", files);
    Boolean isSaved = employeeStaticFileService.getEmployeeStaticFileDTO(files);
    return ResponseEntity.ok(isSaved);
  }*/


  /*@Override
  public Boolean getEmployeeStaticFileDTO(MultipartFile[] files) {

  Boolean isSavedFile = Boolean.FALSE;

  if (files.length > 0) {
  for (MultipartFile multipartFile : files) {
  if (multipartFile.getContentType().equals("image/jpeg") ||
  multipartFile.getContentType().equals("image/apng") ||
  multipartFile.getContentType().equals("image/avif") ||
  multipartFile.getContentType().equals("image/gif") ||
  multipartFile.getContentType().equals("image/jpg") ||
  multipartFile.getContentType().equals("image/jfif") ||
  multipartFile.getContentType().equals("image/pjpeg") ||
  multipartFile.getContentType().equals("image/pjp") ||
  multipartFile.getContentType().equals("image/png") ||
  multipartFile.getContentType().equals("image/svg") ||
  multipartFile.getContentType().equals("image/webp")
) {
  String fileNameWithOutExtension = multipartFile.getOriginalFilename()
    .substring(0, multipartFile.getOriginalFilename().indexOf("."));

  Optional<Employee> employee = employeeRepository.findByPin(fileNameWithOutExtension);
  EmployeeStaticFile employeeStaticFile = new EmployeeStaticFile();

  if (employee.isPresent()) {

  try {
  File savedFile = employeeIdCardService.save(multipartFile);
  employeeStaticFile.setEmployee(employee.get());
  //TODO: query for EmployeeStaticFile
  /!* if(!employeeStaticFile.getFilePath().isEmpty()){

       fileOperationService.delete(employeeStaticFile.getFilePath());
   }*!/
  employeeStaticFile.setFilePath(savedFile.getAbsolutePath());
  employeeStaticFileRepository.save(employeeStaticFile);
  isSavedFile = Boolean.TRUE;
} catch (Exception e) {
  throw new RuntimeException(e);
}

}
}
}
}
return isSavedFile;
}*/
}
