import { Controller, HttpStatus, Param, Get, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'utils/avatar-upload.utils';

@Controller('avatar')
export class AvatarController {

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )

  async uploadedAvatar(@UploadedFile() file) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    }
    return {
      status: HttpStatus.OK,
      message: 'Image uploaded successfully',
      data: response,
    };
  }

  @Get(':imagename')
  getImage(@Param('imagename') image, @Res() res) {
    const response = res.sendFile(image, { root: './uploads'});
    return {
      status: HttpStatus.OK,
      data: response,
    };
  }
}
