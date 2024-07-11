import Image from "next/image";
import { Group } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* Image */}
        <div className="relative w-full flex items-center justify-center dark:bg-secondary/40 xl:bg-[100%] xl:bg-no-repeat overflow-hidden">
          <Image
            src={project.image}
            alt="photo"
            width={440}
            height={200}
            priority={100}
            className="w-full shadow-2xl hover:scale-110 transition-all"
          />
          {/* Link Button */}
          <div className="flex gap-x-4 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
            <Dialog>
              <DialogTrigger className="bg-secondary w-[55px] h-[55px] flex justify-center items-center rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50 duration-200 transition-all">
                <Group />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="hidden">View Project</DialogTitle>
                </DialogHeader>
                <Image
                  src={project.image}
                  alt="photo"
                  width={440}
                  height={200}
                  priority={100}
                  className="w-full"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
