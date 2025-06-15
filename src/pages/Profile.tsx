
import React, { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useAnimateIn } from '@/lib/animations';
import ProjectRoadmap from '@/components/ProjectRoadmap';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserProfile } from '@/lib/types';
import { Mail, Save, X, Plus, ExternalLink } from 'lucide-react';

const initialProfile: UserProfile = {
  name: 'Alex Johnson',
  email: 'alex@example.com',
  description: 'AI researcher and knowledge management enthusiast. Building a digital second brain to enhance creativity and productivity.',
  links: [
    { title: 'Personal Website', url: 'https://example.com' },
    { title: 'GitHub', url: 'https://github.com' },
    { title: 'Twitter', url: 'https://twitter.com' },
  ],
};

const Profile = () => {
  const showContent = useAnimateIn(false, 300);
  const [profile, setProfile] = useState<UserProfile>(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState<UserProfile>(initialProfile);
  const [tempLink, setTempLink] = useState({ title: '', url: '' });
  
  const handleEditProfile = () => {
    setTempProfile({...profile});
    setIsEditing(true);
  };
  
  const handleSaveProfile = () => {
    setProfile({...tempProfile});
    setIsEditing(false);
  };
  
  const handleCancelEdit = () => {
    setIsEditing(false);
  };
  
  const handleAddLink = () => {
    if (tempLink.title && tempLink.url) {
      setTempProfile({
        ...tempProfile,
        links: [...(tempProfile.links || []), tempLink]
      });
      setTempLink({ title: '', url: '' });
    }
  };
  
  const handleRemoveLink = (index: number) => {
    const newLinks = [...(tempProfile.links || [])];
    newLinks.splice(index, 1);
    setTempProfile({
      ...tempProfile,
      links: newLinks
    });
  };
  
  return (
    <div className="w-full max-w-full min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16 w-full">
        <AnimatedTransition show={showContent} animation="slide-up">
          <div className="mb-4 sm:mb-6 md:mb-8 w-full max-w-full overflow-hidden">
            {!isEditing ? (
              <Card className="w-full mb-4 sm:mb-6 md:mb-8 max-w-full overflow-hidden">
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 md:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg sm:text-xl md:text-2xl font-light">{profile.name.charAt(0)}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0 w-full sm:w-auto">
                    <CardTitle className="text-base sm:text-lg md:text-xl break-words hyphens-auto leading-tight">{profile.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1 min-w-0">
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                      <span className="truncate text-xs sm:text-sm">{profile.email}</span>
                    </CardDescription>
                  </div>
                  
                  <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2 sm:gap-3 sm:ml-auto">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-start sm:justify-end">
                      {profile.links?.map((link, index) => (
                        <a 
                          key={index} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-medium hover:bg-primary/90 transition-colors flex-shrink-0 max-w-[120px] sm:max-w-none"
                        >
                          <span className="truncate">{link.title}</span>
                          <ExternalLink size={10} className="sm:size-3 md:size-4 flex-shrink-0" />
                        </a>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleEditProfile}
                      className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 flex-shrink-0"
                    >
                      Edit Profile
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ) : (
              <Card className="w-full mb-4 sm:mb-6 md:mb-8 max-w-full overflow-hidden">
                <CardHeader className="p-3 sm:p-4 md:p-6">
                  <CardTitle className="text-base sm:text-lg md:text-xl">Edit Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-3 sm:p-4 md:p-6 pt-0">
                  <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs sm:text-sm">Name</Label>
                      <Input 
                        id="name" 
                        value={tempProfile.name}
                        onChange={(e) => setTempProfile({...tempProfile, name: e.target.value})}
                        className="text-xs sm:text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs sm:text-sm">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={tempProfile.email}
                        onChange={(e) => setTempProfile({...tempProfile, email: e.target.value})}
                        className="text-xs sm:text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-xs sm:text-sm">Description</Label>
                    <Input 
                      id="description" 
                      value={tempProfile.description || ''}
                      onChange={(e) => setTempProfile({...tempProfile, description: e.target.value})}
                      className="text-xs sm:text-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-xs sm:text-sm">Links</Label>
                    <div className="rounded-md border max-w-full overflow-hidden">
                      <div className="space-y-2 p-2 sm:p-3 md:p-4 max-w-full">
                        {tempProfile.links?.map((link, index) => (
                          <div key={index} className="flex items-center justify-between gap-2 min-w-0">
                            <div className="flex-1 truncate min-w-0">
                              <span className="font-medium text-xs sm:text-sm break-words">{link.title}</span>
                              <span className="text-xs sm:text-sm">: </span>
                              <span className="text-xs sm:text-sm break-all">{link.url}</span>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => handleRemoveLink(index)}
                              className="flex-shrink-0 p-1 sm:p-2"
                            >
                              <X className="h-3 w-3 sm:h-4 sm:w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="grid grid-cols-1 gap-3 sm:gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="linkTitle" className="text-xs sm:text-sm">Link Title</Label>
                        <Input 
                          id="linkTitle" 
                          value={tempLink.title}
                          onChange={(e) => setTempLink({...tempLink, title: e.target.value})}
                          placeholder="GitHub"
                          className="text-xs sm:text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkUrl" className="text-xs sm:text-sm">URL</Label>
                        <div className="flex gap-2">
                          <Input 
                            id="linkUrl" 
                            value={tempLink.url}
                            onChange={(e) => setTempLink({...tempLink, url: e.target.value})}
                            placeholder="https://github.com/username"
                            className="text-xs sm:text-sm flex-1 min-w-0"
                          />
                          <Button onClick={handleAddLink} size="sm" className="flex-shrink-0 px-2 sm:px-3">
                            <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-end gap-2 p-3 sm:p-4 md:p-6 pt-0">
                  <Button variant="outline" onClick={handleCancelEdit} size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                    Cancel
                  </Button>
                  <Button onClick={handleSaveProfile} size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                    <Save className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            )}
            
            <div className="text-center mb-4 sm:mb-6 md:mb-8 px-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold break-words hyphens-auto leading-tight">Project Roadmap</h1>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base leading-relaxed px-2 break-words hyphens-auto">
                Track your project journey from start to completion and collect reviews
              </p>
            </div>
            
            <div className="w-full max-w-full overflow-hidden">
              <ProjectRoadmap />
            </div>
          </div>
        </AnimatedTransition>
      </div>
    </div>
  );
};

export default Profile;
