import { Card, CardContent } from "./ui/card";
import { Award, Target, Eye, Scale } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            About BE'NTE SEB Association
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded by passionate healthcare students, we are legally recognized and committed to making a meaningful difference in healthcare delivery and patient support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To bridge the gap between healthcare providers and patients through compassionate support, education, and community outreach, while fostering professional development among healthcare students at Black Lion Specialized Hospital.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Eye className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To become the leading student-driven healthcare support organization in Ethiopia, creating a model for compassionate patient care and professional excellence that can be replicated nationwide.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-2 border-yellow-100 hover:border-yellow-200 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-xl">
                    <Scale className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Legal Recognition</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Officially registered and recognized by Ethiopian authorities, ensuring transparency, accountability, and legal compliance in all our operations and community service initiatives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Impact</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Since our establishment, we have supported hundreds of patients, conducted numerous health education programs, and contributed significantly to improving healthcare accessibility and quality in our community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 sm:p-12">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
              Why Choose BE'NTE SEB Association?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Student-Led</div>
                <p className="text-gray-600">Driven by passionate healthcare students</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">Community-Focused</div>
                <p className="text-gray-600">Deeply rooted in community needs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">Transparent</div>
                <p className="text-gray-600">Open and accountable operations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Impactful</div>
                <p className="text-gray-600">Measurable positive outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}