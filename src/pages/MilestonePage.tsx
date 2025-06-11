import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Filter, Search, ExternalLink, Award, Briefcase, Code, GraduationCap, Users, BookOpen, Target, Lightbulb, ChevronDown, ChevronUp, Download, FileText, Link as LinkIcon, Certificate, Presentation, Folder, Github, Globe } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import { useTheme } from '../components/ThemeProvider';
import { 
  milestones, 
  resources, 
  projectResources,
  getMilestonesByYear, 
  getResourcesByYear, 
  getUniqueYears, 
  getUniqueTypes, 
  getUniqueResourceTypes,
  getAllProjectsAlphabetically,
  type Milestone,
  type Resource,
  type ProjectResource
} from '../data/milestones';

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'event': return <Calendar className="w-4 h-4" />;
    case 'achievement': return <Award className="w-4 h-4" />;
    case 'project': return <Code className="w-4 h-4" />;
    case 'campus ambassador': return <GraduationCap className="w-4 h-4" />;
    case 'contributor': return <Users className="w-4 h-4" />;
    case 'learning': return <BookOpen className="w-4 h-4" />;
    case 'planning': return <Target className="w-4 h-4" />;
    case 'education': return <GraduationCap className="w-4 h-4" />;
    default: return <Lightbulb className="w-4 h-4" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'event': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'achievement': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'project': return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'campus ambassador': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    case 'contributor': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
    case 'learning': return 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30';
    case 'planning': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    case 'education': return 'bg-teal-500/20 text-teal-400 border-teal-500/30';
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

const getResourceIcon = (type: string) => {
  switch (type) {
    case 'certificate': return <Certificate className="w-4 h-4" />;
    case 'document': return <FileText className="w-4 h-4" />;
    case 'link': return <LinkIcon className="w-4 h-4" />;
    case 'portfolio': return <Folder className="w-4 h-4" />;
    case 'code': return <Code className="w-4 h-4" />;
    case 'presentation': return <Presentation className="w-4 h-4" />;
    default: return <FileText className="w-4 h-4" />;
  }
};

const getResourceTypeColor = (type: string) => {
  switch (type) {
    case 'certificate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'document': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'link': return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'portfolio': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    case 'code': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
    case 'presentation': return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'professional': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
    case 'intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
    default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
};

const MilestoneCard: React.FC<{ milestone: Milestone; index: number }> = ({ milestone, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="bg-light-card dark:bg-dark-card rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:border-primary-500/50 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-xl">{milestone.icon}</span>
          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-primary-400 transition-colors">
              {milestone.title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{milestone.month} {milestone.year}</p>
          </div>
        </div>
        
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-medium ${getTypeColor(milestone.type)}`}>
          {getTypeIcon(milestone.type)}
          {milestone.type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
        </div>
      </div>
      
      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
        {milestone.description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {milestone.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="skill-tag text-xs px-2 py-1"
          >
            {tag}
          </span>
        ))}
        {milestone.tags.length > 3 && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            +{milestone.tags.length - 3} more
          </span>
        )}
      </div>
      
      {/* Link */}
      {milestone.link && (
        <a
          href={milestone.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-xs"
        >
          View Details <ExternalLink size={12} />
        </a>
      )}
    </motion.div>
  );
};

const ResourceCard: React.FC<{ resource: Resource; index: number }> = ({ resource, index }) => {
  const handleAction = () => {
    if (resource.downloadUrl) {
      const link = document.createElement('a');
      link.href = resource.downloadUrl;
      link.download = resource.title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (resource.url) {
      window.open(resource.url, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="bg-light-card dark:bg-dark-card rounded-xl p-4 border border-gray-200 dark:border-gray-800 hover:border-primary-500/50 transition-all duration-300 group cursor-pointer"
      onClick={handleAction}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-xl">{resource.icon}</span>
          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-primary-400 transition-colors">
              {resource.title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{resource.year}</p>
          </div>
        </div>
        
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-medium ${getResourceTypeColor(resource.type)}`}>
          {getResourceIcon(resource.type)}
          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
        </div>
      </div>
      
      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
        {resource.description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {resource.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="skill-tag text-xs px-2 py-1"
          >
            {tag}
          </span>
        ))}
        {resource.tags.length > 3 && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            +{resource.tags.length - 3} more
          </span>
        )}
      </div>
      
      {/* Action */}
      <div className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-xs">
        {resource.downloadUrl ? (
          <>
            <Download size={12} /> Download
          </>
        ) : (
          <>
            <ExternalLink size={12} /> View
          </>
        )}
      </div>
    </motion.div>
  );
};

const ProjectResourceCard: React.FC<{ project: ProjectResource; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.02 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl p-4 border border-teal-200 dark:border-teal-800 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
            <Globe className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              {project.title}
            </h4>
          </div>
        </div>
        
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-medium ${getCategoryColor(project.category)}`}>
          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </div>
      </div>
      
      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
        {project.description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full border border-teal-200 dark:border-teal-700"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            +{project.tags.length - 4} more
          </span>
        )}
      </div>
      
      {/* Actions */}
      <div className="flex gap-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 bg-gray-900 dark:bg-gray-800 text-white rounded-lg text-xs font-medium hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          >
            <Github size={12} /> GitHub
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 bg-teal-600 text-white rounded-lg text-xs font-medium hover:bg-teal-700 transition-colors"
          >
            <ExternalLink size={12} /> Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

const YearSection: React.FC<{ 
  year: string; 
  milestones: Milestone[]; 
  resources: Resource[];
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ year, milestones, resources, isExpanded, onToggle }) => {
  return (
    <div className="mb-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">{year}</h2>
          <div className="flex items-center gap-4 text-sm">
            <span>{milestones.length} milestones</span>
            <span>{resources.length} resources</span>
          </div>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6">
              {milestones.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Milestones</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {milestones.map((milestone, index) => (
                      <MilestoneCard key={milestone.id} milestone={milestone} index={index} />
                    ))}
                  </div>
                </div>
              )}
              
              {resources.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {resources.map((resource, index) => (
                      <ResourceCard key={resource.id} resource={resource} index={index} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MilestonePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set(['2025']));
  const [projectSearchQuery, setProjectSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  const years = getUniqueYears();
  const types = getUniqueTypes();
  
  const filteredMilestones = useMemo(() => {
    return milestones.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesType = selectedType === '' || item.type === selectedType;
      const matchesYear = selectedYear === '' || item.year === selectedYear;
      
      return matchesSearch && matchesType && matchesYear;
    });
  }, [searchQuery, selectedType, selectedYear]);

  const filteredProjects = useMemo(() => {
    return getAllProjectsAlphabetically().filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(projectSearchQuery.toLowerCase()) ||
                           project.description.toLowerCase().includes(projectSearchQuery.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(projectSearchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === '' || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [projectSearchQuery, selectedCategory]);
  
  const stats = useMemo(() => {
    const totalMilestones = milestones.length;
    const totalResources = resources.length;
    const totalProjects = projectResources.length;
    const projectCount = milestones.filter(m => m.type === 'project').length;
    const eventCount = milestones.filter(m => m.type === 'event').length;
    const achievementCount = milestones.filter(m => m.type === 'achievement').length;
    
    return { totalMilestones, totalResources, totalProjects, projectCount, eventCount, achievementCount };
  }, []);

  const toggleYear = (year: string) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  const expandAll = () => {
    setExpandedYears(new Set(years));
  };

  const collapseAll = () => {
    setExpandedYears(new Set());
  };

  return (
    <div className="container-section">
      <SectionHeading
        title="My Journey & Resources"
        subtitle="A comprehensive timeline of my professional growth, projects, achievements, and important resources"
      />

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
        <div className="bg-light-card dark:bg-dark-card rounded-xl p-4 text-center border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-bold text-primary-500 mb-1">{stats.totalMilestones}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Total Milestones</div>
        </div>
        <div className="bg-light-card dark:bg-dark-card rounded-xl p-4 text-center border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-bold text-green-500 mb-1">{stats.projectCount}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
        </div>
        <div className="bg-light-card dark:bg-dark-card rounded-xl p-4 text-center border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-bold text-blue-500 mb-1">{stats.eventCount}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Events</div>
        </div>
        <div className="bg-light-card dark:bg-dark-card rounded-xl p-4 text-center border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-bold text-yellow-500 mb-1">{stats.achievementCount}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Achievements</div>
        </div>
        <div className="bg-light-card dark:bg-dark-card rounded-xl p-4 text-center border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-bold text-purple-500 mb-1">{stats.totalResources}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Resources</div>
        </div>
        <div className="bg-light-card dark:bg-dark-card rounded-xl p-4 text-center border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-bold text-teal-500 mb-1">{stats.totalProjects}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">All Projects</div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search milestones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input pl-10"
            />
          </div>
          
          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="form-input min-w-[150px]"
          >
            <option value="">All Types</option>
            {types.map(type => (
              <option key={type} value={type}>
                {type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </option>
            ))}
          </select>
          
          {/* Year Filter */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="form-input min-w-[120px]"
          >
            <option value="">All Years</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        {/* Expand/Collapse Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={expandAll}
            className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Milestones by Year */}
      <div className="space-y-6 mb-16">
        {years.map(year => {
          const yearMilestones = getMilestonesByYear(year).filter(m => {
            const matchesSearch = searchQuery === '' || 
              m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              m.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            
            const matchesType = selectedType === '' || m.type === selectedType;
            
            return matchesSearch && matchesType;
          });
          
          const yearResources = getResourcesByYear(year);

          if (yearMilestones.length === 0 && yearResources.length === 0) return null;

          return (
            <YearSection
              key={year}
              year={year}
              milestones={yearMilestones}
              resources={yearResources}
              isExpanded={expandedYears.has(year)}
              onToggle={() => toggleYear(year)}
            />
          );
        })}
      </div>

      {/* Resource Vault Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
            <Folder className="w-5 h-5 text-teal-600 dark:text-teal-400" />
          </div>
          <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400">Resource Vault</h2>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/10 dark:to-cyan-900/10 rounded-2xl p-6 border border-teal-200 dark:border-teal-800 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 bg-teal-500/20 rounded-lg flex items-center justify-center">
              <Code className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-xl font-semibold text-teal-800 dark:text-teal-200">All Resources</h3>
          </div>
          
          <p className="text-teal-700 dark:text-teal-300 mb-6">
            Explore all {stats.totalProjects} projects I've built over the years, organized alphabetically. 
            Each project includes source code access and relevant technologies used.
          </p>

          {/* Project Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-500" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={projectSearchQuery}
                onChange={(e) => setProjectSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-teal-900/20 border border-teal-300 dark:border-teal-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-teal-900/20 border border-teal-300 dark:border-teal-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent min-w-[150px]"
            >
              <option value="">All Categories</option>
              <option value="professional">Professional</option>
              <option value="advanced">Advanced</option>
              <option value="intermediate">Intermediate</option>
              <option value="beginner">Beginner</option>
            </select>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <ProjectResourceCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-teal-600 dark:text-teal-400">
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {filteredMilestones.length === 0 && searchQuery && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No milestones found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default MilestonePage;